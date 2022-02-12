# aws-cdk

run commands on the directory that has actual IaC resources


### init
```
cdk init app --language=typescript
```

### cdk documentation
```
cdk doc
```

### make templates
```
cdk synthesize --output=./templates
```

### show the difference between the what's deplyed and what we have on our code
```
cdk diff
```

### deploy
```
cdk deploy
```

<hr>

CloudFormation은 AWS 리소스를 자동으로 생성해주는 서비스이다.
CloudForamtion에서 Stack이란 하나의 단위로 관리할 수 있는 AWS 리소스 모음이다.