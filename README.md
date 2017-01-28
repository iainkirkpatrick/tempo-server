## TEMPO-SERVER

WIP - experimentation with GraphQL + Feathers as a workable server solution

### NOTES
- consider this https://github.com/swarthout/feathers-apollo/issues/10
  - maybe it's a good idea to have custom events for the /graphql route, for clarity? rather than use create() as a POST equivalent
  - something like query() and mutate() ?
  - and then the standard feathers methods for other routes like auth


### POC TODO
- [X] define the sql tables with knex migrations
- [X] serve the graphql route, with the right schema + resolvers to retrieve from the sql table
- [ ] define auth routes for users (account / profile, maybe not even profile? could it be a standard graphql fetch?)
