<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class emailCheck implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {

        $emails = file_get_contents('https://icingprint.co.uk/script/eventbrite/event_email.php');

        $emails_array = json_decode($emails, true);

        if(in_array($value, $emails_array))
        {
            return true;
        }

        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "Please use your Eventbrite email";
    }
}
