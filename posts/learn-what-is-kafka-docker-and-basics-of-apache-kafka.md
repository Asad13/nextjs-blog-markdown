---
title: 'Learn What is Kafka Docker and Basics of Apache Kafka'
date: '2022-10-04'
src: '/images/blog/japan.jpg'
alt: 'Learn What is Kafka Docker and Basics of Apache Kafka'
top: false
recent: false
category: 'devops'
---
Docker is an application that is used to run containerized
<!-- end -->
Docker is an application that is used to run containerized applications using virtualization. Because of this containerization, users can build, run and test their applications completely and separately while still allowing them to communicate across the network. This containerization feature also enables application portability, and as a result, our application can run anywhere, including our local system, AWS, and Kubernetes clusters.

Apache Kafka is used by many top companies for log aggregation, stream processing, event streaming, and many other purposes. Kafka is a high availability, scalable and high-throughput solution chosen by top-class companies of the world. Kafka can run on any of our chosen platforms such as ECS,  Kubernetes and is also used as the cluster of many other Kafka nodes. With zero or more topics, Kafka can be considered as the message channel and queue.

In this article, we will go through the actual concept of Kafka Docker and see the process of Docker’s uninstallation in Kafka. This process is also going to run the steps which are included in running Apache Kafka using Docker.

Using Docker to run Kafka, we will have to learn about its usage, explore Advertised Port, Advertised Hostname, and other related concepts.

## What Are Kafka Dockers: Prerequisites

There are some prerequisites to using Docker. Let us first go through all the steps for running Apache-Kafka using Docker.

- The first step that should be done is to install docker-compose.
- Docker Compose can be run in operating systems like Windows, MacOS, and 64-bit Linux operating systems.
- Docker Engine relies on the Docker engine for all the meaningful work. So, depending on our setup, the Docker Engine must be pre-installed locally or globally.
- Docker-compose is included as part of Desktop installations on Desktop systems such as Windows and MacOS.
- Compose is already included in Docker for Mac and Docker Toolbox, along with other Docker apps. So Mac users need not install Docker separately.

## Uninstalling Kafka-Docker

- If we install the Kafka-Docker using curl, we need to uninstall it by running the following command.
sudo rm /usr/local/bin/docker-compose

- If we install our Kafka-Docker using pip, we can uninstall Docker-compose using the following command.
pip uninstall docker-compose

- After installing Compose in docker-compose.yml, we need to modify the KAKKA_ADVRTISED_HOST_NAME to match our Docker host IP.
- If there’s any need to change the parameters of Kafka, those changes should be added as the environment variables in docker-compose.yml.
- The usage of Kafka’s log4j can be customized by adding the environment variables with prefixed LOG4J_.

## Usage

- To start a Kafka cluster, we need to run docker-compose up -d.
- To add more Kafka_brokers, we need to run docker-compose scale kafka=3.
- To destroy a cluster, we need to run the docker-compose stop.

Note: To use specific ports and rocker ids, we can modify our docker-compose configuration accordingly, such as:

docker-compose-single-single-broker.yml: docker-compose-f docker-compose-single-broker.yml up.

Now let us discuss the broker IDs.

## Broker IDs

We can configure our broker id using different methods:

- Explicitly using KAFKA_BROKER_ID.
- Using a command such as:
- BROKER_ID_COMMAND: “hostname | awk -F’-‘ ‘{print $2}'” .

The broker id will automatically be generated if somehow we forget to specify the broker id in the docker-compose file. Scaling up and down is also permitted by Broker ID.

The -no-recreate function is not used to ensure that containers are not re-created.

## Automatic Topic Creation

A KAFKA_CREATE-TOPIC environment variable must be added to kafka-compose.yml if we want our topics to be created by the Kafka-Docker automatically.

Let us see an example snippet from the docker-compose.yml.

environment : 

KAFKA_CREATE_TOPICS : “Topic1:1:3,Topic2:1:1:compact”

Here, as we can see,  Topic 1 has 1 partition and 3 replicas, and Topic 2 has 1 partition and 1 replica, and there is also cleanup.policy which is basically set to COMPAT.

The default separator can also be overridden by specifying the environment variable KAFKA_CREATE_TOPIC_SEPARATOR to use multi-line YAML and some other delimiter between our topic definitions. 

For example, for splitting the topic definition, if we use “KAFKA_CREATE_TOPICS_SEPARATOR: “$$’\n”‘”, it will use a newline.

Here, we need to ensure that the syntax follows all the docker-compose escaping rules.

## Advertised Hostname

There are different ways of configuring the Advertised Hostname such as, 

- Using KAFKA_ADVERTISED_HOST_NAME explicitly.
- Via a command HOSTNAME_COMMNAD.
Eg., HOSTNAME_COMMAND: “route -n | awk ‘/UG[ \t]/{print $$2}'”

If the If KAFKA_ADVERTISED_HOST_NAME is already specified, it takes priority over HOSTNAME_COMMAND.

The metadata service can be used by us if we want to get the IP of the container host for AWS deployment:

- HOSTNAME_COMMAND=wget -t3 -T2 -qO-  http://169.254.169.254/latest/meta-data/local-ipv4

It can also be done by injecting the HOSTAME_COMMAND in the configuration:
If the value of the HOSTNAME_COMMAND is required by any of our KAFKA_XXX variables, then we can put the string _{HOSTNAME_COMMAND} in our variable value such as:

KAFKA_ADVERTISED_LISTENERS=SSL://_{HOSTNAME_COMMAND}:9093,PLAINTEXT://9092

## Advertised Port

In order to determine if the required advertised port is static or not is very important. And through the PORT_COMMAND environment variable, we can determine the same. 

KAFKA_ADVERTISED_LISTENERS=SSL://_{HOSTNAME_COMMAND}:9093,PLAINTEXT://9092

For interpolating it in any other KAFKA_XXX config, we can use the string {PORT_COMMAND}.

KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://1.2.3.4:_{PORT_COMMAND}

## Docker Swarm Mode

While using an overlay network during Kafka deployment in Swarm, a listener configuration is necessary. On separating INSIDE and the OUTSIDE listeners, the host, and the clients outside the overlay network can communicate within the Swarm at the time of benefiting from it.

For operating Kafka in Docker Swarm, one must include some good practices such as:

- In the compose file, we have to use “deploy:global” for launching one and only one Kafka broker per swarm node.
- Use composing file version 3.2 and the “long” port definition along with port host mode rather than using the default “ingress” load-balanced port binding.

## Kafka Docker Image

We can install the entire confluent platform or the individual components using the Docker images. On DockerHub, all the confluent platform Docker images are available. We should always use Mounting Docker External Volumes while deploying Kafka images for the file systems. These images used for their persistent data will retain their proper state when all the containers are stopped or restarted. In Kafka’s topics, the states are directly maintained by the other images. 

## Bridge Networking vs. Host Networking

Bridge networking is supported on a single host. We must overlay those networks which are not currently supported if we want to run bridge networks over multiple hosts.

There are some cases where the host networking is recommended, such as:

- Without using Swarm or Kubernetes multi-host clusters.
- We need our Kafka to be accessed outside the bridge or overlay network by the clients.

Now let us discuss the methods for adding a new connector to the new Kafka images.

## Adding New Connector to the New Kafka Images

- A Docker image is required to be built where the connector is installed. We need to ensure that the connector JARs are on the CLASSPATH for the connect service, and the default location “user/src/java/kafka-connect-*” is the recommended location for this purpose.
- We need to connect the connector JARSs via volumes. And if we do not want to connect the docker image for connecting the cp-kafka-connect containers with external JARs, other ways are available.
Advance your career as a MEAN stack developer with the Full Stack Web Developer - MEAN Stack Master's Program. Enroll now!

## Conclusion

In this article, we discussed Kafka Docker and how important its application is. Our application container can easily access an Apache Kafka server running inside a container, which can be done using Docker container networking. 

A Kafka Docker helps do real-time analysis; it is used for collecting big data and for real-time data streaming; it is used with in-memory microservices to provide durability. It can also be used for feeding events to complex event streaming systems.