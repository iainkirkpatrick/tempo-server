## TEMPO-SERVER

### NOTES
- consider this https://github.com/swarthout/feathers-apollo/issues/10
  - maybe it's a good idea to have custom events for the /graphql route, for clarity? rather than use create() as a POST equivalent
  - something like query() and mutate() ?
  - and then the standard feathers methods for other routes like auth
