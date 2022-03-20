pipeline{

    agent any
    stages {
        stage('Build'){
            steps{
                echo "build the Docker Image"
            }
        }
        stage('Test2'){
            steps{
                echo "Test!!"
                bat "npm install"
                bat "cypress run"
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