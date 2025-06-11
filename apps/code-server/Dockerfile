FROM codercom/code-server:4.96.4

USER root
RUN apt-get update \
    && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
# Revert to the code-server defautl user
USER coder
# Expose code-server's default port
EXPOSE 8080

RUN mkdir -p /tmp/bolty-worker

RUN git clone https://github.com/mdkulkarni2005/base-react-native-app-for-bolty.git /tmp/bolty-worker
RUN cd /tmp/bolty-worker && npm install

# Start code-server on container launch
CMD ["code-server", "--auth", "none", "--bind-addr", "0.0.0.0:8080", "/tmp/bolty-worker"]
