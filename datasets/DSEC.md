---
{
    "name": "DSEC",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [
        "Velodyne Lidar",
        "FLIR Blackfly S USB3"
    ],
    "category": "Robotic and Moving Vehicle Datasets",
    "subcategory": [
        "Autonomous Driving",
        "Stereo Datasets"
    ],
    "task": "Driving task",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://dsec.ifi.uzh.ch/dsec-datasets/download/",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 150.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "DSEC: A Stereo Event Camera Dataset for Driving Scenarios",
        "doi": "10.1109/LRA.2021.3068942",
        "authors": [
            "Mathias Gehrig",
            "Willem Aarents",
            "Daniel Gehrig",
            "Davide Scaramuzza"
        ],
        "abstract": "Once an academic venture, autonomous driving has received unparalleled corporate funding in the last decade. Still, operating conditions of current autonomous cars are mostly restricted to ideal scenarios. This means that driving in challenging illumination conditions such as night, sunrise, and sunset remains an open problem. In these cases, standard cameras are being pushed to their limits in terms of low light and high dynamic range performance. To address these challenges, we propose, DSEC, a new dataset that contains such demanding illumination conditions and provides a rich set of sensory data. DSEC offers data from a wide-baseline stereo setup of two color frame cameras and two high-resolution monochrome event cameras. In addition, we collect lidar data and RTK GPS measurements, both hardware synchronized with all camera data. One of the distinctive features of this dataset is the inclusion of high-resolution event cameras. Event cameras have received increasing attention for their high temporal resolution and high dynamic range performance. However, due to their novelty, event camera datasets in driving scenarios are rare. This work presents the \ufb01rst high resolution, large scale stereo dataset with event cameras. The dataset contains 53 sequences collected by driving in a variety of illumination conditions and provides ground truth disparity for the development and evaluation of event-based stereo algorithms.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 219,
            "updated": "2025-07-08T06:53:51.316435"
        },
        {
            "source": "scholar",
            "count": 408,
            "updated": "2025-07-08T06:53:51.013576"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2103.06011"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9387069"
        },
        {
            "type": "project_page",
            "url": "https://dsec.ifi.uzh.ch/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/DSEC"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "53",
        "stereo_baseline": "60 cm",
        "stereo": true
    },
    "bibtex": {
        "pages": "4947--4954",
        "year": 2021,
        "month": "jul",
        "author": "Gehrig, Mathias and Aarents, Willem and Gehrig, Daniel and Scaramuzza, Davide",
        "journal": "IEEE Robotics and Automation Letters",
        "urldate": "2023-09-05",
        "number": "3",
        "language": "en",
        "doi": "10.1109/LRA.2021.3068942",
        "url": "https://ieeexplore.ieee.org/document/9387069/",
        "shorttitle": "{DSEC}",
        "issn": "2377-3766, 2377-3774",
        "volume": "6",
        "title": "{DSEC}: {A} {Stereo} {Event} {Camera} {Dataset} for {Driving} {Scenarios}",
        "type": "article",
        "key": "gehrig_dsec_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TIP.2006.884928",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3025505",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.352",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00210",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364919843996",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364916679498",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.350",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00141",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.534",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00271",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01164",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_27",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00786",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00028",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2019.2893427",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298925",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00099",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.401",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01246-5_15",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2008.4587671",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298644",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV.2017.00012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793511",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00161",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2007.1166",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2013.6696514",
            "source": "crossref"
        },
        {
            "doi": "10.2514/1.28949",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0262-8856(92)90066-C",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "A large scale event-based detection dataset for automotive",
            "source": "crossref"
        },
        {
            "title": "Virtual worlds as proxy for multi-object tracking analysis",
            "source": "crossref"
        },
        {
            "title": "Ddd20 end-to-end event camera driving dataset: Fusing frames and events with deep learning for improved steering prediction",
            "source": "crossref"
        },
        {
            "title": "Ddd17: End-to-end davis driving dataset",
            "source": "crossref"
        },
        {
            "title": "A2d2: Audi autonomous driving dataset",
            "source": "crossref"
        },
        {
            "title": "Scalability in perception for autonomous driving: Waymo open dataset",
            "source": "crossref"
        },
        {
            "title": "5.10 a 1280&#x00D7; 720 back-illuminated stacked temporal contrast event-based vision sensor with 4.86 $\\mu$m pixels, 1.066 geps readout, programmable event-rate controller and compressive data-formatting pipeline",
            "source": "crossref"
        },
        {
            "title": "High-resolution stereo datasets with subpixel-accurate ground truth",
            "source": "crossref"
        }
    ]
}
---



### Dataset Description

DSEC is a stereo camera dataset in driving scenarios that contains data from two monochrome **event cameras** and two **global shutter color cameras** in favorable and challenging illumination conditions. In addition, we collect **Lidar** data and RTK GPS measurements, both hardware synchronized with all camera data. One of the distinctive features of this dataset is the inclusion of VGA-resolution event cameras. Event cameras have received increasing attention for their high temporal resolution and high dynamic range performance. However, due to their novelty, event camera datasets in driving scenarios are rare. This work presents the first high-resolution, large-scale stereo dataset with event cameras. The dataset contains 53 sequences collected by driving in a variety of illumination conditions and provides ground truth disparity for the development and evaluation of event-based stereo algorithms.


### Dataset Structure 

- Contains 53 recordings
- Cameras have a baseline of 60 cm