pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            sh 'node_14.16'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
