pipeline{
    agent any
    stages{
        stage("Backing up Primary server"){
            steps{
                echo "Taking backup of Primary server"
                // Replace IP address with hostname of your environment
                sh 'rsync -a jenkins@72.251.224.47:3000 :docker exec 97f253336918/var/jenkins_home/ docker exec 02ef61114ceb /var/jenkins_home/-"`date +"%d-%m-%Y-%H-%M"`"'
                              
            }
        }
    }
}
