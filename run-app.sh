chmod +x run-app.sh
kotlinc RegisteruserApplication.kt -include-runtime -d RegisteruserApplication.jar
java -jar RegisteruserApplication.jar