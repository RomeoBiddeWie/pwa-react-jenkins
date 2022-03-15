pipeline{

    agent {
        docker { image 'node:16.13.1-alpine' }
    }
    stages{
        stage('Build'){
            steps{
                echo "build the Docker Image"
            }
        }
        stage('Test'){
            steps{
                echo "Test!!"
                sh "npm install"
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
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}