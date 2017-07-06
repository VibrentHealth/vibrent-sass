# Vibrent Sass Framework 

## Launching
``npm install ; bower install ; gulp``

The styleguide will be available at port 3000 by default. 

## Contributing

Please note that the project compiles into a .tmp file for serving and a dist file for builds. These files will contain minified, obfuscated, and concatenated javascript files as well as css files and the necessary assets depending on the command and flags used.

Good things to do:

* document your code for yourself
* document your code for your children
* document your code for your team mates

### Commit Messages <a name="commitMessages"></a>

We will be using a [changelog generator](https://github.com/conventional-changelog/conventional-changelog) so we would like to format our commit messages in certain way so that our changelog generator picks the messages up properly.

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

For more details look [here](https://github.com/conventional-changelog/conventional-commits-parser).

We will use this [changelog](CHANGELOG.MD) so that everyone from QA to management to development will know what is in what build without any confusion.


#### Updated by Kyle Mills 07/06/2017 
