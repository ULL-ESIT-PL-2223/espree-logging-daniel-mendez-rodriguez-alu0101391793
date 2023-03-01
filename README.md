# Espree Logging

A simple tool to add logging statements to the beggining of each function in a JS file

## Installation

```bash
npm install -g espree-logging
```

## Usage

```bash
funlog [options] <input file>
```

### Options

| Option | Description |
| --- | --- |
| -o, --output <file> | The file to write the logged JS code to |
| -h, --help | Display help for command |
| -v, --version | Display version number |

## Tests
  
```bash
npm test
```

## Functions

<dl>
<dt><a href="#addLogging">addLogging(code)</a> ⇒</dt>
<dd><p>Returns the resulting JS code with logging statements added at the beggining
of each function</p>
</dd>
</dl>

<a name="addLogging"></a>

## addLogging(code) ⇒ <code>String</code>
Returns the resulting JS code with logging statements added at the beggining
of each function

**Kind**: global function  
**Returns**: <code>String</code> - The resulting JS code with logging statements added  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | The input JS code to be transformed |
