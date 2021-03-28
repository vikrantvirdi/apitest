pipeline{
    agent any
    stages{
        stage("Backing up Primary server"){
            steps{
                echo "Taking backup of Primary server"
               sh 'ssh -a root@72.251.224.47:/var/jenkins_home  var/jenkins_home/jenkins_primary_server_backup-"`date +"%d-%m-%Y-%H-%M"`"'
                              
            }
        }
    }
}
