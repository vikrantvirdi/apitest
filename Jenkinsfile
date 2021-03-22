pipeline{
    agent any
    stages{
        stage("Backing up Primary server"){
            steps{
                echo "Taking backup of Primary server"
                // Replace IP address with hostname of your environment
                sh 'rsync -a jenkins@72.251.224.47:/var/lib/jenkins/ /var/lib/jenkins_primary_server_backup/jenkins-"`date +"%d-%m-%Y-%H-%M"`"'
                              
            }
        }
    }
}
