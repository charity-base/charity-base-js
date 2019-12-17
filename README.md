# CharityBase JS

JavaScript library for interacting with CharityBase API

**Note:** this package is not required for querying the API directly.  Instead we recommend using [Apollo](https://github.com/apollographql/apollo-client) or a simple data fetching library e.g. [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch).  For examples, see https://charitybase.uk/api-portal.

## Installing

Include the library and styles inside the `<head>` of each relevant page:

```html
<script src='https://unpkg.com/charity-base@4.0.0-beta.7'></script>
<link href='https://unpkg.com/charity-base@4.0.0-beta.7/dist/index.css' rel='stylesheet'>
```

*The script must be included before trying to initialise a CharityBase instance.*


## Initialising

Create an instance of the CharityBase object:

```js
var cb = CharityBase('YOUR_API_KEY')
```

*Remember to replace `YOUR_API_KEY` with your actual key: https://charitybase.uk/api-portal/keys*


## Elements

CharityBase Elements is a set of drop-in UI components that utilise the API for common use cases. Each element is completely customisable, responsive to different screen sizes and can be styled to match the look and feel of your site.

Create an instance of Elements:

```js
var elements = cb.elements()
```


### Autofill Element

The CharityBase Autofill Element is designed to be inserted into your existing application form, and will automatically fill the first fields whilst the applicant is typing.

Include an empty element at the top of your form:

```html
<form>
  <section id='charity-base-autofill'></section>
  <!-- feel free to add more inputs here -->
</form>
```

Create an instance of the Autofill Element:

```js
var opts = {
  onButtonClick: function(x) {
    console.log(x)
  }
}
var autofill = elements.createAutofill(opts)
```

Add this instance into the empty `<section>`:

```js
autofill.mount('charity-base-autofill')
```

*The argument passed to `mount` must correspond to the `id` an existing DOM element*

For examples and full documentation, see https://charitybase.uk/api-portal/elements.
