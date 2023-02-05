FROM python:latest
# pycファイルの生成をしないようにする
ENV PYTHONDONTWRITEBYTECODE=1
# 標準出力・標準エラーのストリームのバッファリングを行わない
ENV PYTHONUNBUFFERED=1
WORKDIR /djangopj
COPY . /djangopj
RUN pip install -r requirements.txt
CMD ./entrypoint.sh