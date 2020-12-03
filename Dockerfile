# Stage 1: Build Fat Jar
FROM alpine:latest as builder
RUN apk update && apk upgrade
# Get JDK, NodeJS, NPM, Yarn
RUN apk add openjdk8
RUN apk add --update nodejs npm
RUN apk add yarn

WORKDIR ~/repo

COPY . .
# Run the default tasks defined in build.gradle.kts
RUN ./gradlew

# Stage 2: Run the Fat Jar in a JRE alpine (without JDK, NodeJS, NPM, Yarn and everything)
FROM openjdk:8-jre-alpine

COPY --from=builder ~/repo/build/libs/scratch-off-tickets-0.0.1-all.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
