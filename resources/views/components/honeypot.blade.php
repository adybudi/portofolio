@php($honeypot = \App\Support\Honeypot::fields())
<input type="hidden" name="hp_time" value="{{ $honeypot['hp_time'] }}">
<input type="hidden" name="hp_check" value="{{ $honeypot['hp_check'] }}">
