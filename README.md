# Vibrent Sass Framework 

Preview the styles at https://vibrenthealth.github.io/styleguide/

## Installing For Users 

``bower install vibrent-sass``

## Installing For Developers
``npm install ; bower install``

## Building
``gulp build``

## Serving
``gulp``

The styleguide will be available at port 3000 by default. 

## Contributing

Please note that the project compiles into a .tmp file for serving and a dist file for builds. These files will contain minified, obfuscated, and concatenated javascript files as well as css files and the necessary assets depending on the command and flags used.

Good things to do:

* document your code for yourself
* document your code for your children
* document your code for your team mates

### Running Tests

Please run the unit-tests prior to checking in changes. Unit-tests can be run with the command.

``karma start``

Please add additional unit-tests for any additional code added to vibrent-sass. 

### Commit Messages <a name="commitMessages"></a>

Commit Messages should be formatted as such:
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

#### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation
  
A basic commit message for a feature should look like this:
```
feat(login): describe the feature here

specific commit message

Ref JIRA AC-TICKETNUMBERHERE
```

A basic commit message for a bug should look like this:
```
fix(form-rendering): describe the bug fix here

specific commit message

Fixes JIRA AC-TICKETNUMBERHERE
```

#### Updated by Kyle Mills 09/18/2017 
