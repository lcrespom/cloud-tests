# NodeJS Test

To create a S2I build, run:

```
oc new-app https://github.com/lcrespom/cloud-tests --context-dir=nodejs
```

Then create a route via `oc expose svc cloud-tests` and check the route.
