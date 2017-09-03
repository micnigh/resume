FROM travisci/ci-garnet:packer-1504367595

SHELL ["/bin/bash", "-l", "-c"]

USER travis

RUN nvm install node && nvm alias default node

ENTRYPOINT ["/bin/bash", "-l", "-c"]
