pipeline { 

    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {
     
        stage('Source checkout') {
            steps {
                echo 'Cloning source code is finished.'
            }
        }

        stage('Test') {
            steps {
                echo 'Cloning source test is finished.'
            }
        }

        stage('Docker build') {
            steps {
                echo 'Build dokcer image'
                sh ''' docker image build -t admin-webapp-0 .'''
            }
        }

        stage('Docker deploy') {
            steps {
                echo '----------------- This is a docker deploment phase ----------'
                sh '''
                 (if  [ $(docker ps -a | grep admin-webapp-0 | cut -d " " -f1) ]; then \
                        echo $(docker rm -f ecom-webservice); \
                        echo "---------------- successfully removed admin-webapp-0 ----------------"
                     else \
                    echo OK; \
                 fi;);
                docker container run --restart always --name admin-webapp-0-container -p 4200:80 -d admin-webapp-0
            '''
            }
        }
    }
}