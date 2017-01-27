## TEMPO-SERVER

### NOTES
- consider this https://github.com/swarthout/feathers-apollo/issues/10
  - maybe it's a good idea to have custom events for the /graphql route, for clarity? rather than use create() as a POST equivalent
  - something like query() and mutate() ?
  - and then the standard feathers methods for other routes like auth

todo
- nice way to createProject and pass through developersIds and resolve to schema correctly
- basically, need a service Developers-Projects to cover operations on the join table (which we'd need anyway, to make edits to relations)


all tempo-server needs to do is
- define the sql tables with knex migrations
- serve the graphql route, with the right schema + resolvers to retrieve from the sql table
- define auth routes for users (account / profile, maybe not even profile? could it be a standard graphql fetch?)
