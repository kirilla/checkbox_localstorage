# checkbox_localstorage
A javascript snippet that stores checkbox state in localstorage in the browser.

With this you can create simple static webpages for personal checklists.

## What is it good for
* You want to publish checklists in a central location for many people to use.
* The checklists are mostly static content.
* You don't care about the checkmark status of your checklist users.
* The users have no need to share their checkmark status with anyone else.

## How to use it

1. Create a web page.
2. Load the checkur.js file.

```
<head>
    <script src="checkur.js"></script>
</head>
```

3. Initialize the checkur.js script at the end of the page body.
```
<body>
  ...

  <script>
  Checkur.init("checkur");
  </script>
</body>
```

4. Add the classname and a unique id to your inputs.
```
<body>
  <input type="checkbox" class="checkur" id="123">
  <input type="checkbox" class="checkur" id="foo123dj">
  <input type="checkbox" class="checkur" id="h23o4o">
</body>
```

5. Does it work?
(See comment in webpage.)
