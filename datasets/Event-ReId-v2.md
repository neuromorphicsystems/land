---
{
    "name": "Event-ReId-v2",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Person Detection",
        "Surveillance",
        "Human Pose Recognition",
        "Person Identification",
        "Privacy Preservation",
        "First-person"
    ],
    "description": "Human pose estimation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
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
                "url": "https://zenodo.org/records/10398002",
                "format": "CSV",
                "available": true,
                "doi": "10.5281/zenodo.8256438"
            }
        ],
        "size_gb": 1.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event Anonymization: Privacy-Preserving Person Re-Identification and Pose Estimation in Event-Based Vision",
        "doi": "10.1109/ACCESS.2024.3399539",
        "authors": [
            "Shafiq Ahmad",
            "Pietro Morerio",
            "Alessio Del Bue"
        ],
        "abstract": "The widespread use of visual surveillance in public areas puts individual privacy at stake while also increasing resource usage (energy, bandwidth, and computation). Neuromorphic vision sensors (or event cameras) are considered viable solutions for privacy issues; since event cameras only capture scene dynamics, they do not capture detailed RGB images of individuals. However, recent deep learning architectures have enabled the reconstruction of high-fidelity images from event sensor data that could reveal individual identity information. As a result, it reintroduces privacy risks for event-based vision applications. In this work, we focus on protecting the identity of individuals from such image reconstruction attacks by anonymizing event data. To achieve this, we present an end-to-end network architecture jointly optimized for the twofold objective of preserving privacy and performing a downstream computer vision task. The proposed network learns to scramble events, thereby degrading the quality of images that potential intruders could reconstruct. We demonstrate the application of our framework in two challenging computer vision tasks: person re-identification (ReId) and human pose estimation (HPE). To this end, we also present and evaluate the first event-based person ReId dataset, Event-ReId. We validate the privacy-preserving efficacy of our approach against possible privacy attacks through extensive experiments: for person ReId, we utilize the real event-based Event-ReId dataset and synthetic event data simulated from the SoftBio dataset; for HPE, we use a publicly available event-based dataset DHP19. The results of both tasks show that anonymizing event data effectively protects private information with minimal impact on the subsequent task performance.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 6,
            "updated": "2025-07-09T10:10:42.427514"
        },
        {
            "source": "scholar",
            "count": 9,
            "updated": "2025-07-09T10:10:42.142556"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://www.arxiv.org/abs/2308.04402"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10528297"
        },
        {
            "type": "project_page",
            "url": "https://zenodo.org/records/10398002"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "sensor_resolution": "640x480",
        "average_duration": "4\u00a0seconds",
        "stereo": true
    },
    "connected_datasets": [
        "Event-Reid"
    ],
    "bibtex": {
        "pages": "66964--66980",
        "year": 2024,
        "author": "Ahmad, Shafiq and Morerio, Pietro and Del Bue, Alessio",
        "journal": "IEEE Access",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/ACCESS.2024.3399539",
        "url": "https://ieeexplore.ieee.org/document/10528297/",
        "shorttitle": "Event {Anonymization}",
        "issn": "2169-3536",
        "copyright": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "volume": "12",
        "title": "Event {Anonymization}: {Privacy}-{Preserving} {Person} {Re}-{Identification} and {Pose} {Estimation} in {Event}-{Based} {Vision}",
        "type": "article",
        "key": "ahmad_event_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/LRA.2022.3145053",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00150",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00587",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACVW54805.2022.00052",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00358",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s21134320",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.398",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19778-9_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01022",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2019.8702581",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2021/240",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00432",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00257",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19772-7_19",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3026709",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_30",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cose.2021.102402",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2894535",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2023.3296143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIFS.2023.3243490",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TII.2022.3195063",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01390",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3054775",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01027",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i04.5891",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-33863-2_43",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s18103471",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR48806.2021.9412340",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DSC54232.2022.9888863",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2020.3010248",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00530-022-01019-0",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s21217315",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2929257",
            "source": "crossref"
        },
        {
            "doi": "10.26599/TST.2018.9010100",
            "source": "crossref"
        },
        {
            "doi": "10.1109/THMS.2022.3219242",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00502",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3172212",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2017.8297089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2019.00162",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR.2010.579",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.1703.07737",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00190",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00482",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DICTA.2012.6411689",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00420",
            "source": "crossref"
        },
        {
            "title": "DDD17: End-To-End Davis driving dataset",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Towards privacy-preserving person re-identification via person identify shift",
            "source": "crossref"
        },
        {
            "title": "Heatmap distribution matching for human pose estimation",
            "source": "crossref"
        },
        {
            "title": "MiVOLO: Multi-input transformer for age and gender estimation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The current Event-ReId-v2 dataset comprises [num_subjects::60] identities walking across a disjoint field of view of four event cameras integrated through a surveillance network. The cameras are installed at various positions and angles of tilt, and each one is paired with an RGB camera in a stable stereo setup. This arrangement ensures they capture approximately the same scene and are synchronized using the network clock, see Figure 2. Each RGB camera captures data at a frame rate of 33 FPS with a resolution of 640x480 pixels, resulting in around 27K images. On average, each camera records 120 frames per person. The resolution of the event cameras matches that of the RGB cameras, and the duration of recording for each stream is approximately ≈4 seconds, the same for both sensors, lasting around 4 seconds. Additionally, within the 60 identities captured, 9 subjects are wearing face masks. A total of 57 subjects appear in all four camera pairs, while the rest are seen in three camera views. The dataset encompasses a range of variations, including changes in lighting, poses, and viewpoints. We manually annotate the person and face bounding boxes on both event and RGB streams; the event ground truth bounding box is synchronized with RGB bounding boxes.

### Notes:

Another dataset was used for experimental setup in paper: ReId SoftBio (synthetic event data)

- softBio consists of 152 people and 64,472 frames from 8 surveillance cameras.
