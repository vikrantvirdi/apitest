pipeline{
    agent any
    stages{
        stage("Backing up Primary server"){
            steps{
                echo "Taking backup of Primary server"
                scp -r /var/jenkins_home root@72.251.224.47:/var/jenkins_home 
                              
            }
        }
    }
}
