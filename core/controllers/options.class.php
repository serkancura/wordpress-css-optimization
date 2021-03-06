<?php
namespace O10n;

/**
 * Options Controller
 *
 * @package    optimization
 * @subpackage optimization/controllers
 * @author     Optimization.Team <info@optimization.team>
 */
if (!defined('ABSPATH')) {
    exit;
}

class Options extends Controller implements Controller_Interface
{
    private $data; // options data
    private $bypass_restriction = false;

    /**
     * Load controller
     *
     * @param  Core       $Core Core controller instance.
     * @return Controller Controller instance.
     */
    public static function &load(Core $Core)
    {
        // instantiate controller
        return parent::construct($Core, array(
            'json'
        ));
    }

    /**
     * Setup controller
     */
    public function setup()
    {
        // get options
        $this->get(false, true);

        if (!is_admin()) {
            // disable public access to options
            add_filter('option_optimization', array($this,'restrict_option_access'), $this->first_priority, 1);
            add_filter('pre_option_optimization', array($this,'restrict_option_access'), $this->first_priority, 2);
        }
    }

    /**
     * Get option
     *
     * @param  string $key     Option key.
     * @param  string $Default Default value for non existing options.
     * @return mixed  Option data.
     */
    final public function get($key = false, $default = null, $multi_full_path = false)
    {
        // return all options
        if (!$key) {

            // reset?
            if (!is_array($this->data) || $default) {
                $this->data = get_option('o10n', array());
                if (!is_array($this->data)) {
                    $this->data = array();
                }
            }

            return $this->data;
        }

        // multi query
        if (substr($key, -2) === '.*') {
            $parent_key = substr($key, 0, -2);
            $keys = preg_grep('/'.preg_quote($parent_key).'\..*/', array_keys($this->data));

            $result = array();
            foreach ($keys as $key) {
                if (isset($this->data[$key])) {
                    $pathkey = ($multi_full_path) ? $key : str_replace($parent_key.'.', '', $key);
                    $result[$pathkey] = $this->data[$key];
                }
            }

            return $result;
        }

        if (isset($this->data[$key])) {
            return $this->data[$key];
        }

        if (!is_null($default)) {
            return $default;
        }

        return;
    }

    /**
     * Set options dynamically without saving to database
     *
     * @param array $options Options to add
     */
    final public function set($key, $value = null)
    {
        $json = array();

        // string key
        if (is_string($key)) {
            
            // sanitize potential JSON
            $key = trim($key);

            // JSON string input
            if (is_null($value) && substr($key, 0, 1) === '{') {
                try {
                    $json = $this->json->parse($key, true);
                    $json = $this->json->to_dot($json);
                } catch (\Exception $e) {
                    throw new Exception('Invalid JSON: ' . $e->getMessage(), 'settings');
                }
            } else {
                $json[$key] = $value;
            }
        } elseif (is_array($key)) {

            // multi-dimensional array (decoded JSON)
            if ($value === true) {
                $json = $this->json->to_dot($key);
            } else { // JSON path => value
                foreach ($key as $_key => $_value) {
                    $json[$_key] = $_value;
                }
            }
        }

        // store data
        foreach ($json as $key => $value) {
            $this->data[$key] = $value;
        }
    }

    /**
     * Delete options dynamically without saving to database
     *
     * @param array $options Options to add
     */
    final public function delete($key)
    {
        // multi query
        if (substr($key, -2) === '.*') {
            $parent_key = substr($key, 0, -2);
            $keys = preg_grep('/'.preg_quote($parent_key).'\..*/', array_keys($this->data));

            $result = array();
            foreach ($keys as $key) {
                if (isset($this->data[$key])) {
                    unset($this->data[$key]);
                }
            }
        } else {
            if (isset($this->data[$key])) {
                unset($this->data[$key]);
            }
        }
    }

    /**
     * Get JSON option
     *
     * @param  string $key     Option key.
     * @param  string $Default Default value for non existing options.
     * @return array  Option data.
     */
    final public function json($key = false, $default = null)
    {
        $json = $this->get($key, $default);
        if (is_string($json)) {
            try {
                $json = $this->json->parse($json, true);
            } catch (\Exception $e) {
                return false;
            }

            return $json;
        }

        return;
    }

    /**
     * Update options cache
     */
    final public function update()
    {
        $this->get(false, true);
    }

    /**
     * Get boolean option
     *
     * @param  string  $key     Option key.
     * @param  string  $Default Default value for non existing options.
     * @return boolean True/false
     */
    final public function bool($keys, $default = false)
    {
        if (!is_array($keys)) {
            $keys = array($keys);
            $single = true;
        } else {
            $single = false;
        }
        foreach ($keys as $key) {
            if (isset($this->data[$key]) && is_bool($this->data[$key])) {
                if ($single || $this->data[$key]) {
                    return $this->data[$key];
                }
            } elseif (substr($key, -8) !== '.enabled') {
                $value = $this->bool($key . '.enabled');
                if ($single && is_bool($value)) {
                    return $value;
                } elseif ($value) {
                    return true;
                }
            }
        }

        return $default;
    }

    /**
     * Check if option exists
     *
     * @param  string  $key Option key.
     * @return boolean True/false
     */
    final public function exists($key)
    {
        return (isset($this->data[$key]));
    }

    /**
     * Restrict access to option
     *
     * @param  mixed  $value       Option value.
     * @param  string $option_name Option name.
     * @return array  Empty array.
     */
    final public function restrict_option_access($value, $option_name = false)
    {
        if ($this->bypass_restriction) {
            return $value;
        }

        return array(); // return empty
    }

    /**
     * Save settings to options
     */
    final public function save($settings, $replace = false)
    {
        if (!is_array($settings)) {
            throw new Exception('Options to save not array.', 'settings');
        }
        
        // get options
        $options = $this->get();

        // add options to save
        $options = array_merge($options, $settings);

        // save
        update_option('o10n', $options, true);

        // update cache
        $this->update($options);
    }
}
