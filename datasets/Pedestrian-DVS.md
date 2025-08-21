---
{
    "name": "Pedestrian-DVS",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "CARLA"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Pedestrian Detection"
    ],
    "description": "Pedestrian detection",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "Dataset may only contain event-frames, rather than actual events.",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/11409259",
                "format": "Unknown",
                "available": true,
                "doi": "10.5281/zenodo.11409259"
            }
        ],
        "size_gb": 10.9,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Spiking Neural Networks for Real-Time Pedestrian Street-Crossing Detection Using Dynamic Vision Sensors in Simulated Adverse Weather Conditions",
        "doi": "10.3390/electronics13214280",
        "authors": [
            "Mustafa Sakhai",
            "Szymon Mazurek",
            "Jakub Caputa",
            "Jan K. Argasi\u0144ski",
            "Maciej Wielgosz"
        ],
        "abstract": "This study explores the integration of Spiking Neural Networks (SNNs) with Dynamic Vision Sensors (DVSs) to enhance pedestrian street-crossing detection in adverse weather conditions\u2014a critical challenge for autonomous vehicle systems. Utilizing the high temporal resolution and low latency of DVSs, which excel in dynamic, low-light, and high-contrast environments, this research evaluates the effectiveness of SNNs compared to traditional Convolutional Neural Networks (CNNs). The experimental setup involved a custom dataset from the CARLA simulator, designed to mimic real-world variability, including rain, fog, and varying lighting conditions. Additionally, the JAAD dataset was adopted to allow for evaluations using real-world data. The SNN models were optimized using Temporally Effective Batch Normalization (TEBN) and benchmarked against well-established deep learning models, concerning their accuracy, computational efficiency, and energy efficiency in complex weather conditions. This study also conducted a comprehensive analysis of energy consumption, highlighting the significant reduction in energy usage achieved by SNNs when processing DVS data. The results indicate that SNNs, when integrated with DVSs, not only reduce computational overhead but also dramatically lower energy consumption, making them a highly efficient choice for real-time applications in autonomous vehicles (AVs).",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-09T09:35:39.723506"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-09T09:35:38.891845"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2406.00473"
        },
        {
            "type": "paper",
            "url": "https://www.mdpi.com/2079-9292/13/21/4280"
        },
        {
            "type": "github_page",
            "url": "https://github.com/szmazurek/snn_dvs.git"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "4280",
        "year": 2024,
        "month": "oct",
        "author": "Sakhai, Mustafa and Mazurek, Szymon and Caputa, Jakub and Argasi\u0144ski, Jan K. and Wielgosz, Maciej",
        "journal": "Electronics",
        "urldate": "2024-12-15",
        "number": "21",
        "language": "en",
        "doi": "10.3390/electronics13214280",
        "url": "https://www.mdpi.com/2079-9292/13/21/4280",
        "issn": "2079-9292",
        "copyright": "https://creativecommons.org/licenses/by/4.0/",
        "volume": "13",
        "title": "Spiking {Neural} {Networks} for {Real}-{Time} {Pedestrian} {Street}-{Crossing} {Detection} {Using} {Dynamic} {Vision} {Sensors} in {Simulated} {Adverse} {Weather} {Conditions}",
        "type": "article",
        "key": "Sakhai2024"
    },
    "referenced_papers": [
        {
            "doi": "10.3390/info15080472",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2024.3386032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2017.33",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2018.01.092",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2023.3281393",
            "source": "crossref"
        },
        {
            "doi": "10.3390/buildings13041070",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2021.108252",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00967",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10161318",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00636",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s41449-023-00360-y",
            "source": "crossref"
        },
        {
            "doi": "10.3390/jsan13030034",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IV55156.2024.10588472",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2020.2982539",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2022.851774",
            "source": "crossref"
        },
        {
            "doi": "10.3390/electronics10080888",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00107",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2019.2931595",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s12293-022-00373-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SAS58821.2023.10254055",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN55064.2022.9892618",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i07.6787",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.procs.2022.01.135",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2016.2533542",
            "source": "crossref"
        },
        {
            "doi": "10.3390/rs14081837",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00938",
            "source": "crossref"
        },
        {
            "doi": "10.20944/preprints202407.0130.v1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MM.2018.112130359",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN48605.2020.9207109",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN52387.2021.9533738",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco_a_01367",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNN.2004.832719",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00266",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2021.773954",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC57777.2023.10422401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2014.6757323",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00476",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1126/sciadv.adi1480",
            "source": "crossref"
        },
        {
            "title": "Autonomous Vehicles and Intelligent Automation: Applications, Challenges, and Opportunities",
            "source": "crossref"
        },
        {
            "title": "Regulatory Sandboxes for Safety Assurance of Autonomous Vehicles",
            "source": "crossref"
        },
        {
            "title": "Event Cameras in Automotive Sensing: A Review",
            "source": "crossref"
        },
        {
            "title": "A Comprehensive Survey on the Application of Deep and Reinforcement Learning Approaches in Autonomous Driving",
            "source": "crossref"
        },
        {
            "title": "Computer vision and deep learning techniques for pedestrian detection and tracking: A survey",
            "source": "crossref"
        },
        {
            "title": "Pedestrian Behavior Prediction Using Deep Learning Methods for Urban Scenarios: A Review",
            "source": "crossref"
        },
        {
            "title": "Pedestrian trajectory prediction with convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "Untersuchung des Entscheidungsverhaltens von Fu\u00dfg\u00e4ngern bei \u00fcberqueren MIT autonomen Fahrzeugen in Virtueller Realit\u00e4t",
            "source": "crossref"
        },
        {
            "title": "Pedestrian Detection in Severe Weather Conditions",
            "source": "crossref"
        },
        {
            "title": "Surrogate Gradient Learning in Spiking Neural Networks: Bringing the Power of Gradient-based optimization to spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "A hierarchical taxonomic survey of spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "A Review of Yolo Algorithm Developments",
            "source": "crossref"
        },
        {
            "title": "On-Road Vehicle Detection and Tracking Using MMW Radar and Monovision Fusion",
            "source": "crossref"
        },
        {
            "title": "Loihi: A Neuromorphic Manycore Processor with On-Chip Learning",
            "source": "crossref"
        },
        {
            "title": "The Remarkable Robustness of Surrogate Gradient Learning for Instilling Complex Function in Spiking Neural Networks",
            "source": "crossref"
        },
        {
            "title": "Optimal ANN-SNN Conversion for Fast and Accurate Inference in Deep Spiking Neural Networks",
            "source": "crossref"
        },
        {
            "title": "Which model to use for cortical spiking neurons?",
            "source": "crossref"
        },
        {
            "title": "Deep residual learning in spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Temporal effective batch normalization in spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "DSEC: A Stereo Event Camera Dataset for Driving Scenarios",
            "source": "crossref"
        },
        {
            "title": "SpikingJelly: An open-source machine learning infrastructure platform for spike-based intelligence",
            "source": "crossref"
        }
    ]
}
---

### Dataset Description

Pedestrian-DVS is a dataset of video frames showing pedestrians crossing the street obtained from CARLA simulation environment.

The dataset consists of two subsets, showing scenes in good and bad weather conditions. The good weather subset consists of 117 videos, while bad weather subset contains 81 videos. Each video consists of 900 frames.

Standard RGB frames are paired with corresponding frames extracted from recordings of dynamic vision sensor. Each frame is labeled using the following format: \<frame_number-label.format>. A frame is labeled as positive if, in a given frame, the pedestrian is crossing the street.

For more information, please visit the repository with code used to analyze this dataset or contact the authors.

Contact email:
szmazurek@agh.edu.pl

Source: https://zenodo.org/records/11409259
