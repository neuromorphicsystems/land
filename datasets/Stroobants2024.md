---
{
    "name": "Stroobants2024",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Other"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Flying",
        "Non-visual Data"
    ],
    "description": "Attitude estimation and control",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://data.4tu.nl/datasets/f474ef0a-6ef1-4ea1-a958-4827c4eadf60",
                "format": "CSV",
                "available": true,
                "doi": "10.4121/f474ef0a-6ef1-4ea1-a958-4827c4eadf60"
            }
        ],
        "size_gb": 0.6,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Neuromorphic Attitude Estimation and Control",
        "doi": "10.1109/LRA.2025.3553418",
        "authors": [
            "S. Stroobants",
            "C. De Wagter",
            "G. C. H. E. de Croon"
        ],
        "abstract": "The real-world application of small drones is mostly hampered by energy limitations. Neuromorphic computing promises extremely energy-efficient AI for autonomous flight, but is still challenging to train and deploy on real robots. In order to reap the maximal benefits from neuromorphic computing, it is desired to perform all autonomy functions end-to-end on a single neuromorphic chip, from low-level attitude control to high-level navigation. This research presents the first neuromorphic control system using a spiking neural network (SNN) to effectively map a drone's raw sensory input directly to motor commands. We apply this method to low-level attitude estimation and control for a quadrotor, deploying the SNN on a tiny Crazyflie. We propose a modular SNN, separately training and then merging estimation and control sub-networks. The SNN is trained with imitation learning, using a flight dataset of sensory-motor pairs. Post-training, the network is deployed on the Crazyflie, issuing control commands from sensor inputs at $500$Hz. Furthermore, for the training procedure we augmented training data by flying a controller with additional excitation and time-shifting the target data to enhance the predictive capabilities of the SNN. On the real drone the perception-to-control SNN tracks attitude commands with an average error of $3$ degrees, compared to $2.5$ degrees for the regular flight stack. We also show the benefits of the proposed learning modifications for reducing the average tracking error and reducing oscillations. Our work shows the feasibility of performing neuromorphic end-to-end control, laying the basis for highly energy-efficient and low-latency neuromorphic autopilots.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-07-12T09:39:42.011478"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2411.13945v1"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10935624"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Machine Learning, Computer Science - Robotics, Computer Science - Neural and Evolutionary Computing",
        "note": "arXiv:2411.13945 [cs]",
        "year": 2024,
        "month": "nov",
        "author": "Stroobants, Stein and Wagter, Christophe de and Croon, Guido C. H. E. De",
        "publisher": "arXiv",
        "urldate": "2024-11-26",
        "language": "en",
        "doi": "10.48550/arXiv.2411.13945",
        "url": "http://arxiv.org/abs/2411.13945",
        "title": "Neuromorphic {Attitude} {Estimation} and {Control}",
        "type": "misc",
        "key": "stroobants_neuromorphic_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/j.scijus.2021.11.002",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11676-015-0088-y",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.procs.2018.07.063",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.adg1462",
            "source": "crossref"
        },
        {
            "doi": "10.3390/electronics10090999",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364918770733",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.abl8419",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.288.5469.1189",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0893-6080(97)00011-7",
            "source": "crossref"
        },
        {
            "doi": "10.1098/rstb.1999.0442",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41467-022-28487-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197530",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48506.2021.9560881",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41586-023-06419-4",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2020.XVI.074",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3546790.3546799",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CDC.2016.7798778",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SSCI47803.2020.9308275",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2017.2720851",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2020.XVI.040",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA57147.2024.10611665",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2016.7487175",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MM.2018.112130359",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.adi0591",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCDS.2023.3320251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBOT.2010.5509980",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MMAR.2017.8046794",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2019.2931595",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00266",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco_a_01367",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2013.6630809",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10161097",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SiPS52927.2021.00053",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2304638",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10846-013-9890-y",
            "source": "crossref"
        },
        {
            "title": "The limits and potentials of deep learning for robotics",
            "source": "crossref"
        },
        {
            "title": "A survey of neuromorphic computing and neural networks in hardware",
            "source": "crossref"
        },
        {
            "title": "End-to-end learned event-and image-based visual odometry",
            "source": "crossref"
        },
        {
            "title": "A reduction of imitation learning and structured prediction to no-regret online learning",
            "source": "crossref"
        },
        {
            "title": "Resurrecting recurrent neural networks for long sequences",
            "source": "crossref"
        },
        {
            "title": "Deep state space models for time series forecasting",
            "source": "crossref"
        },
        {
            "title": "Addition is all you need for energy-efficient language models",
            "source": "crossref"
        },
        {
            "title": "Bootstrapping reinforcement learning with imitation for vision-based agile flight",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

| Filename      | Size    | MD5                              | Download Link                                                                            |
| ------------- | ------- | -------------------------------- | ---------------------------------------------------------------------------------------- |
| README.md     | 1.6 KB  | 97d9fc9753a23a3c34c6da9628f7eada | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/README.md)     |
| log00.csv     | 51.2 MB | 19c21d24de02053047f77a534575e22b | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log00.csv)     |
| log01.csv     | 65.7 MB | 462418d415f508e7872c2e2bec04c34f | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log01.csv)     |
| log02.csv     | 40.0 MB | 3f18d5d86bfee1ee2f447d78cc35d710 | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log02.csv)     |
| log02_snn.csv | 21.4 MB | 1d06d03349b75cd3b8b80057a6933d3a | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log02_snn.csv) |
| log03.csv     | 77.6 MB | 719d7d7d8e6ed682d6a82d663c23a3b8 | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log03.csv)     |
| log03_snn.csv | 15.2 MB | afee512627a4cb4599f36edd18e5b97b | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log03_snn.csv) |
| log04.csv     | 77.7 MB | e7eea0b27e0181f8516ebc95843468f0 | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log04.csv)     |
| log05.csv     | 63.8 MB | 78e43056706cd46aa98a653b6992c007 | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log05.csv)     |
| log05_snn.csv | 23.5 MB | 6f53aff20785bba6e72be99eb8c22646 | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log05_snn.csv) |
| log06.csv     | 43.3 MB | fd83a5bd25e3b08275f35c1ae1206409 | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log06.csv)     |
| log06_snn.csv | 11.4 MB | 60b73a2d548017377272d52247e5b1cd | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log06_snn.csv) |
| log07.csv     | 36.6 MB | 619fd135704cb2a511ec195af5c18a69 | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log07.csv)     |
| log08.csv     | 59.7 MB | 5080000c9bb3d03d486341340c2ab3ae | [Download](https://data.4tu.nl/files/f474ef0a-6ef1-4ea1-a958-4827c4eadf60/log08.csv)     |
