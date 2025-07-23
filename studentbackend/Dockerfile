FROM openjdk:21-jdk-slim
VOLUME /temp
WORKDIR /app
EXPOSE 7070
COPY target/studentbackend-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]