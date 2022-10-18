# Github Actions?

- use to write tasks, called actions & combine them to create a Custom Workflow

## Events

- push
- pull request(opened, merged)
- issue(created, closed)
- schedule (every 6 PM)
- External event

## Runner

- any machine with Github Actions RUNNER application installed
- runner -> runs your jobs -> display back results.

# YAML File - File Structure

- 'name', 'on' & 'jobs'

```
name: learn GA  # name pf action

on: [push] #event type

jobs:
    run-shell-command:
      runs-on: ubuntu-latest #operating system
      steps:
        - name: echo a string   # Steps Label
          run: echo "Hello World"   # Steps command
        - name: echo current directory
          run: ls ./
        - name: multiline script
          run: |
            node -v
            npm -v
```

# Notification of GA

- github.com/settings/notification  >> goto Github Actions
- choose what kind notification you want
- choose failure notification or NOT.
