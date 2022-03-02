# CRC details

After `crc start`:

```
Started the OpenShift cluster.

The server is accessible via web console at:
  https://console-openshift-console.apps-crc.testing

Log in as administrator:
  Username: kubeadmin
  Password: MF2PA-QvXQ9-kU6cs-X9rD9 # changes every time

  oc login -u kubeadmin https://api.crc.testing:6443

Log in as user:
  Username: developer
  Password: developer

Use the 'oc' command line interface:
  > @FOR /f "tokens=*" %i IN ('crc oc-env') DO @call %i
  > oc login -u developer https://api.crc.testing:6443
```

# ArgoCD

## The ArgoCD Application YAML:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
    name: argocd-deplo-test
spec:
    destination:
        name: in-cluster
        namespace: argo-deplo-ns
        server: ''
    source:
        path: nodejs-deployment
        repoURL: 'https://github.com/lcrespom/cloud-tests.git'
        targetRevision: HEAD
        directory:
            recurse: true
    project: default
    syncPolicy:
        syncOptions:
            - CreateNamespace=true
```

## Getting the admin password

```
oc extract secret/openshift-gitops-cluster -n openshift-gitops --to=-
```

## Synchronize error

See workaround here: https://access.redhat.com/solutions/6447811

```
oc adm policy add-role-to-user admin system:serviceaccount:openshift-gitops:openshift-gitops-argocd-application-controller -n argo-deplo-ns
```

The namespace of the above command must match with the spec.destination.namespace field of the above yaml.
