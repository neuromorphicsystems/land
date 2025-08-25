---
{
    "name": "EDFLOW21",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Optical Flow"
    ],
    "description": "Corner detection and Optical Flow",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1gBdwPtvAeqyQvT1e1E8XXEeioQeRHIhI",
                "format": "CSV",
                "available": false
            }
        ],
        "size_gb": 2.6,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EDFLOW: Event Driven Optical Flow Camera With Keypoint Detection and Adaptive Block Matching",
        "doi": "10.1109/TCSVT.2022.3156653",
        "authors": [
            "Min Liu",
            "Tobi Delbruck"
        ],
        "abstract": "Event cameras such as the Dynamic Vision Sensor (DVS) are useful because of their low latency, sparse output, and high dynamic range. In this paper, we propose a DVS+FPGA camera platform and use it to demonstrate the hardware implementation of event-based corner keypoint detection and adaptive block-matching optical flow. To adapt sample rate dynamically, events are accumulated in event slices using the area event count slice exposure method. The area event count is feedback controlled by the average optical flow matching distance. Corners are detected by streaks of accumulated events on event slice rings of radius 3 and 4 pixels. Corner detection takes about 6 clock cycles (16 MHz event rate at the 100MHz clock frequency) At the corners, flow vectors are computed in 100 clock cycles (1 MHz event rate). The multiscale block match size is 25x25 pixels and the flow vectors span up to 30-pixel match distance. The FPGA processes the sum-of-absolute distance block matching at 123 GOp/s, the equivalent of 1230 Op/clock cycle. EDFLOW is several times more accurate on MVSEC drone and driving optical flow benchmarking sequences than the previous best DVS FPGA optical flow implementation, and achieves similar accuracy to the CNN-based EV-Flownet, although it burns about 100 times less power. The EDFLOW design and benchmarking videos are available at https://sites.google.com/view/edflow21/home.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 32,
            "updated": "2025-07-08T14:50:55.520432"
        },
        {
            "source": "scholar",
            "count": 60,
            "updated": "2025-07-08T14:50:55.317983"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9727106"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/edflow21/home"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "5776--5789",
        "year": 2022,
        "month": "sep",
        "author": "Liu, Min and Delbruck, Tobi",
        "journal": "IEEE Transactions on Circuits and Systems for Video Technology",
        "urldate": "2024-04-13",
        "number": "9",
        "language": "en",
        "doi": "10.1109/TCSVT.2022.3156653",
        "url": "https://ieeexplore.ieee.org/document/9727106/",
        "shorttitle": "{EDFLOW}",
        "issn": "1051-8215, 1558-2205",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "32",
        "title": "{EDFLOW}: {Event} {Driven} {Optical} {Flow} {Camera} {With} {Keypoint} {Detection} and {Adaptive} {Block} {Matching}",
        "type": "article",
        "key": "liu_edflow_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/MSP.2019.2928127",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2941282",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2007.378616",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-010-0390-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298925",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS40897.2019.8968520",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2986748",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCI.2019.2948787",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2015.02.013",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759610",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01049",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00176",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.969046",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICMLC.2014.7009151",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-1-4757-4474-3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2018.8351314",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2647639",
            "source": "crossref"
        },
        {
            "doi": "10.1109/31.44346",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2011.11.001",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBIO.2015.7419043",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-19258-1_27",
            "source": "crossref"
        },
        {
            "doi": "10.1113/jphysiol.1965.sp007638",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2016.2598703",
            "source": "crossref"
        },
        {
            "doi": "10.1109/82.899640",
            "source": "crossref"
        },
        {
            "doi": "10.1023/A:1008916202887",
            "source": "crossref"
        },
        {
            "doi": "10.1109/72.217194",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2015.2437077",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1002/9781118927601",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2010.5537149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7168734",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2008.4541871",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2017.7989517",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10514-009-9139-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2017.2658940",
            "source": "crossref"
        },
        {
            "doi": "10.1002/rob.21764",
            "source": "crossref"
        },
        {
            "doi": "10.1260/1756-8293.5.4.287",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050295",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBOT.2010.5509777",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2018.8351588",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2018.2834558",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2018.8351312",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58526-6_22",
            "source": "crossref"
        },
        {
            "title": "Low latency event-based filtering and feature extraction for dynamic vision sensors in real-time FPGA applications",
            "source": "crossref"
        },
        {
            "title": "Building blocks for Event-Based sensors",
            "source": "crossref"
        },
        {
            "title": "Unsupervised learning of dense optical flow, depth and egomotion from sparse event data",
            "source": "crossref"
        },
        {
            "title": "Event-based moving object detection and tracking",
            "source": "crossref"
        },
        {
            "title": "Real-time high speed motion prediction using fast aperture-robust event-driven visual flow",
            "source": "crossref"
        },
        {
            "title": "SE-Harris and eSUSAN: Asynchronous event-based corner detection using megapixel resolution CeleX-V camera",
            "source": "crossref"
        },
        {
            "title": "A new diamond search algorithm for fast block matching motion estimation",
            "source": "crossref"
        },
        {
            "title": "Simultaneous optical flow and segmentation (SOFAS) using dynamic vision sensor",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Adaptive time-slice block-matching optical flow algorithm for dynamic vision sensors",
            "source": "crossref"
        },
        {
            "title": "Direction selective silicon retina that uses null inhibition",
            "source": "crossref"
        },
        {
            "title": "Integrated optical motion detection",
            "source": "crossref"
        },
        {
            "title": "An iterative image registration technique with an application to stereo vision",
            "source": "crossref"
        },
        {
            "title": "Stereo dense depth tracking based on optical flow using frames and events",
            "source": "crossref"
        },
        {
            "title": "HARMS: A hardware acceleration architecture for real-time event-based optical flow",
            "source": "crossref"
        },
        {
            "title": "Self-Supervised learning of event-based optical flow with spiking neural networks",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
