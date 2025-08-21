---
{
    "name": "ROSS-LAN",
    "aliases": [],
    "year": 2019,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [
        "Velodyne HDL-32E"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Flying"
    ],
    "description": "Landing Trajectory Simulations",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://grvc.us.es/newweb/wp-content/uploads/2021/03/PerceptionSensorDataset.zip",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 3.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "ROSS-LAN: RObotic Sensing Simulation Scheme for Bioinspired Robotic Bird LANding",
        "doi": "10.1007/978-3-030-36150-1_5",
        "authors": [
            "Juan Pablo Rodr\u00edguez-G\u00f3mez",
            "Augusto G\u00f3mez Egu\u00edluz",
            "Jos\u00e9 Ramiro Mart\u00ednez-de Dios",
            "An\u00edbal Ollero"
        ],
        "abstract": "Aerial robotics is evolving towards the design of bioinspired platforms capable of resembling the behavior of birds and insects during flight. The development of perception algorithms for navigation of ornithopters requires sensor data information to evaluate and solve the limitations presented during the flight of these platforms. However, the payload constraints and hardware complexity of ornithopters hamper the sensor data acquisition. This paper focuses on the development of a multi-sensor simulator to retrieve the sensor information captured during the landing maneuvers of ornithopters. The landing trajectory is computed by using a bioinspired trajectory generator relying on tau theory. Further, a dataset of the sensor information records obtained during the simulation of several landing trajectories is publicly available online.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-07-08T07:43:56.940547"
        },
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-07-08T07:43:56.620172"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "file:///Users/gregorycohen/Downloads/ROBOT2019_PerceptionSimulator%20(3).pdf"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-030-36150-1_5"
        },
        {
            "type": "project_page",
            "url": "https://grvc.us.es/bioinspired-landing-trajectory-sensor-dataset/."
        }
    ],
    "full_name": "RObotic Sensing Simulation Scheme for Bioinspired Robotic Bird LANding",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "48--59",
        "year": 2020,
        "editor": "Silva, Manuel F. and Lu\u00eds Lima, Jos\u00e9 and Reis, Lu\u00eds Paulo and Sanfeliu, Alberto and Tardioli, Danilo",
        "author": "Rodr\u00edguez-G\u00f3mez, Juan Pablo and G\u00f3mez Egu\u00edluz, Augusto and Mart\u00ednez-de Dios, Jos\u00e9 Ramiro and Ollero, An\u00edbal",
        "publisher": "Springer International Publishing",
        "booktitle": "Robot 2019: {Fourth} {Iberian} {Robotics} {Conference}",
        "doi": "10.1007/978-3-030-36150-1_5",
        "isbn": "978-3-030-36150-1",
        "title": "{ROSS}-{LAN}: {RObotic} {Sensing} {Simulation} {Scheme} for {Bioinspired} {Robotic} {Bird} {LANding}",
        "address": "Cham",
        "type": "inproceedings",
        "key": "rodriguez-gomez_ross-lan_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MRA.2016.2636368",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCAS.2008.4694517",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SIMPAR.2016.7862386",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364913509496",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1068/pmklee",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S1672-6529(09)60189-X",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696520",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759610",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The dataset contains the measurements captured by several onboard sensors during the landing maneuvers of an ornithopter robot. Each dataset contains a ROS bag file with the sensor measurements, a file with the bioinspired trajectory, a file with the events generated by the simulated event-based sensor, and a README file with the instructions to use the dataset.

The bioinspired landing trajectories are computed using Tau Theory. Each landing trajectory test was performed in a simulated scenario. The object models of each scene can be found in the /model/meshes folder of each scene. There are two testing scenes: (i) a warehouse and (ii) a refinery. The file object_pose.csv includes the position and orientation of each object in the scene. The sensor measurements were saved in rosbag file that contains a topic for each sensor measurement. The dataset includes information from the following simulated sensors:

- Velodyne HDL-32E
- Sonar sensor with a range of 20 m
- IMU
- Frame based monocular camera
- Event camera
