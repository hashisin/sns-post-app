# sns-post-app

## コンセプト

"日常生活を少し楽に"

## ローカルでの動作手順

### コンテナイメージ作成

```bash
cd sns-post-app/
docker-compose build
```

### コンテナ起動・ログイン

```bash
docker-compose up -d
docker exec -it sns-post-app_node_1 bash
```

### コンテナ停止方法

```bash:container
exit
```

```bash
docker-compose down
```
