#! /bin/bash

PEM_KEY=/home/waleed/Desktop/simosagpt.pem
SSH_ADDRESS=ubuntu@ec2-18-234-52-123.compute-1.amazonaws.com
PORT=22

LOCAL_PROJECT_ROOT=/home/waleed/chat-app

REMOTE_TOMCAT_DIR=/home/ubuntu/apache-tomcat-10.1.18

ssh -i $PEM_KEY  $SSH_ADDRESS -p $PORT "
$REMOTE_TOMCAT_DIR/bin/shutdown.sh;
rm -fr $REMOTE_TOMCAT_DIR/work/Catalina/localhost/ROOT;
rm -fr $REMOTE_TOMCAT_DIR/webapps/ROOT
"

sftp -P $PORT -i $PEM_KEY $SSH_ADDRESS <<EOF
put -R $LOCAL_PROJECT_ROOT/dist/chat-app/browser $REMOTE_TOMCAT_DIR/webapps
exit
EOF

ssh -i $PEM_KEY  $SSH_ADDRESS -p $PORT "
mv $REMOTE_TOMCAT_DIR/webapps/browser $REMOTE_TOMCAT_DIR/webapps/ROOT;
$REMOTE_TOMCAT_DIR/bin/startup.sh
"