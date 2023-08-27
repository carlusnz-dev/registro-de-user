@echo off
kotlinc RegisteruserApplication.kt -include-runtime -d RegisteruserApplication.jar
java -jar RegisteruserApplication.jar