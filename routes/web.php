<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/map', 'HomeController@map')->name('map');

Route::get('/events', 'HomeController@events')->name('events');

Route::get('/info', 'HomeController@info')->name('info');

Route::get('/list', 'HomeController@list')->name('list');
