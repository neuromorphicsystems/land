---
{
    "name": "Gehrig2020",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Visual Navigation",
    "tags": [
        "None"
    ],
    "description": "3DOF angular velocity prediction for a rotating camera",
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
            "Numpy"
        ],
        "availability_comment": "Script to download the code is provided in the Github Repository",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://github.com/uzh-rpg/snn_angular_velocity",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 62.7,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Angular Velocity Regression with Spiking Networks",
        "doi": "10.1109/ICRA40945.2020.9197133",
        "authors": [
            "Mathias Gehrig",
            "Sumit Bam Shrestha",
            "Daniel Mouritzen",
            "Davide Scaramuzza"
        ],
        "abstract": "Spiking Neural Networks (SNNs) are bio-inspired networks that process information conveyed as temporal spikes rather than numeric values. An example of a sensor providing such data is the event-camera. It only produces an event when a pixel reports a signi\ufb01cant brightness change. Similarly, the spiking neuron of an SNN only produces a spike whenever a signi\ufb01cant number of spikes occur within a short period of time. Due to their spike-based computational model, SNNs can process output from event-based, asynchronous sensors without any pre-processing at extremely lower power unlike standard arti\ufb01cial neural networks. This is possible due to specialized neuromorphic hardware that implements the highlyparallelizable concept of SNNs in silicon. Yet, SNNs have not enjoyed the same rise of popularity as arti\ufb01cial neural networks. This not only stems from the fact that their input format is rather unconventional but also due to the challenges in training spiking networks. Despite their temporal nature and recent algorithmic advances, they have been mostly evaluated on classi\ufb01cation problems. We propose, for the \ufb01rst time, a temporal regression problem of numerical values given events from an event-camera. We speci\ufb01cally investigate the prediction of the 3DOF angular velocity of a rotating event-camera with an SNN. The dif\ufb01culty of this problem arises from the prediction of angular velocities continuously in time directly from irregular, asynchronous event-based input. Directly utilising the output of event-cameras without any pre-processing ensures that we inherit all the bene\ufb01ts that they provide over conventional cameras. That is high-temporal resolution, high-dynamic range and no motion blur. To assess the performance of SNNs on this task, we introduce a synthetic event-camera dataset generated from real-world panoramic images and show that we can successfully train an SNN to perform angular velocity regression.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 50,
            "updated": "2025-06-14T10:23:44.661097"
        },
        {
            "source": "scholar",
            "count": 118,
            "updated": "2025-06-14T10:23:44.502719"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2003.02790"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9197133"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/snn_angular_velocity"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "Sun360 dataset",
        "stereo": false
    },
    "bibtex": {
        "pages": "4195--4202",
        "year": 2020,
        "month": "may",
        "author": "Gehrig, Mathias and Shrestha, Sumit Bam and Mouritzen, Daniel and Scaramuzza, Davide",
        "publisher": "IEEE",
        "booktitle": "2020 {IEEE} {International} {Conference} on {Robotics} and {Automation} ({ICRA})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/ICRA40945.2020.9197133",
        "url": "https://ieeexplore.ieee.org/document/9197133/",
        "isbn": "978-1-72817-395-5",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "Event-{Based} {Angular} {Velocity} {Regression} with {Spiking} {Networks}",
        "address": "Paris, France",
        "type": "inproceedings",
        "key": "gehrig_event-based_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1113/jphysiol.1952.sp004764",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2006.887979",
            "source": "crossref"
        },
        {
            "doi": "10.1109/RME.2005.1542972",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2304638",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2018.2881432",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.726791",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MM.2018.112130359",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.1254642",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00184",
            "source": "crossref"
        },
        {
            "doi": "10.1017/CBO9780511815706",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2018.12.002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2015.7280696",
            "source": "crossref"
        },
        {
            "doi": "10.1073/pnas.1604850113",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICMLA.2016.0061",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00682",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco.1996.8.1.1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2647639",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00508",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2019.2931595",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco_a_01086",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0925-2312(01)00658-0",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ipl.2005.05.023",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2016.10.011",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00331",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2017.2759700",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1038/323533a0",
            "source": "crossref"
        },
        {
            "doi": "10.1142/S0129065712500128",
            "source": "crossref"
        },
        {
            "doi": "10.1162/089976601300014321",
            "source": "crossref"
        },
        {
            "doi": "10.1038/nn1643",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00907",
            "source": "crossref"
        },
        {
            "doi": "10.1103/PhysRevE.51.738",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.700",
            "source": "crossref"
        },
        {
            "title": "Aer ear: A matched silicon cochlea pair with address event representation interface",
            "source": "crossref"
        },
        {
            "title": "Converting static image datasets to spiking neuromorphic datasets using saccades",
            "source": "crossref"
        },
        {
            "title": "Learning multiple layers of features from tiny images",
            "source": "crossref"
        },
        {
            "title": "Improving spikeprop enhancements to an error-backpropagation rule for spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Noisy spiking neurons with temporal coding have more computational power than sigmoidal neurons",
            "source": "crossref"
        },
        {
            "title": "A million spiking-neuron integrated circuit with a scalable communication network and interface",
            "source": "crossref"
        },
        {
            "title": "Conversion of continuous-valued deep networks to efficient event- driven networks for image classification",
            "source": "crossref"
        },
        {
            "title": "ESIM: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Training deep spiking neural networks using backpropagation",
            "source": "crossref"
        },
        {
            "title": "Hybrid macro/micro level backpropagation for training deep spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Error-backpropagation in temporally encoded networks of spiking neurons",
            "source": "crossref"
        },
        {
            "title": "Robustness to training disturbances in SpikeProp learning",
            "source": "crossref"
        },
        {
            "title": "SLAYER: Spike layer error reassignment in time",
            "source": "crossref"
        },
        {
            "title": "Learning representations by back-propagating errors",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "ReSuMe-new supervised learning method for spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Very deep convolutional networks for large-scale image recognition",
            "source": "crossref"
        },
        {
            "title": "Recognizing scene viewpoint using panoramic place representation",
            "source": "crossref"
        },
        {
            "title": "Network in network",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

Converted from the Sun360 dataset

Training dataset:

- URL: http://rpg.ifi.uzh.ch/data/snn_angular_velocity/dataset/train.tar.zst
- Size: 48.8 Gb

Validation dataset:

- URL: http://rpg.ifi.uzh.ch/data/snn_angular_velocity/dataset/val.tar.zst
- Size: 2.7 Gb

Test dataset:

- URL: http://rpg.ifi.uzh.ch/data/snn_angular_velocity/dataset/test.tar.zst
- Size: 2.2 Gb
