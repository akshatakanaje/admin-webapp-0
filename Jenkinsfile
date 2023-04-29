pipeline { 

    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Initialize')
        {
            def dockerHome = tool 'MyDocker'
            env.PATH = "${dockerHome}/bin"
        }

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
    }
}