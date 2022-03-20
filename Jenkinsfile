pipeline{

    agent {
        docker { image 'node:16.13.1-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
        stage('Build'){
            steps{
                echo "build the Docker Image"
            }
        }
        stage('Test2'){
            steps{
                echo "Test!!"
                bat "npm install"
                echo "Installation done"
            }
        }
        stage('Deploy to Kubernetes'){
            steps{
                echo "deploy stuff"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: '', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}