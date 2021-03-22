pipeline{
    agent any
    stages{
        stage("Backing up Primary server"){
            steps{
                echo "Taking backup of Primary server"
                // Replace IP address with hostname of your environment
                sh 'rsync -a jenkins@72.251.224.47:/var/jenkins_home/ /var/jenkins_home/jenkins-"`date +"%d-%m-%Y-%H-%M"`"'
                              
            }
        }
    }
}
