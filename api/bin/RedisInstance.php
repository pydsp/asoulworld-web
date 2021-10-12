<?php
class RedisInstance
{
    private static $instance;

    private function __construct()
    {
        self::$instance=new Redis();
        self::$instance->connect('127.0.0.1');
    }

    private function __clone()
    {
        //cancel clone method
    }
    public static function getInstance(): Redis
    {
        if (!(self::$instance instanceof self)) {
            new self();
        }
        return self::$instance;
    }
}