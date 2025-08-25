---
{
    "name": "NED",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DVS-Voltmeter",
        "DVXplorer"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "De-blurring",
        "Shutter Control"
    ],
    "description": "Event-based Motion De-blurring",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "Non-Uniform Exposure Imaging via Neuromorphic Shutter Control",
        "doi": "10.1109/TPAMI.2025.3526280",
        "authors": [
            "Mingyuan Lin",
            "Jian Liu",
            "Chi Zhang",
            "Zibo Zhao",
            "Chu He",
            "Lei Yu"
        ],
        "abstract": "By leveraging the blur-noise trade-off, imaging with non-uniform exposures largely extends the image acquisition flexibility in harsh environments. However, the limitation of conventional cameras in perceiving intra-frame dynamic information prevents existing methods from being implemented in the real-world frame acquisition for real-time adaptive camera shutter control. To address this challenge, we propose a novel Neuromorphic Shutter Control (NSC) system to avoid motion blurs and alleviate instant noises, where the extremely low latency of events is leveraged to monitor the real-time motion and facilitate the scene-adaptive exposure. Furthermore, to stabilize the inconsistent Signal-to-Noise Ratio (SNR) caused by the non-uniform exposure times, we propose an event-based image denoising network within a self-supervised learning paradigm, i.e., SEID, exploring the statistics of image noises and inter-frame motion information of events to obtain artificial supervision signals for high-quality imaging in real-world scenes. To illustrate the effectiveness of the proposed NSC, we implement it in hardware by building a hybrid-camera imaging prototype system, with which we collect a real-world dataset containing well-synchronized frames and events in diverse scenarios with different target scenes and motion patterns. Experiments on the synthetic and real-world datasets demonstrate the superiority of our method over state-of-the-art approaches.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-22T12:35:16.913052"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2404.13972v1"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10829814"
        }
    ],
    "full_name": "Neuromorphic Exposure Dataset (NED)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2404.13972 [cs]",
        "year": 2024,
        "month": "apr",
        "author": "Lin, Mingyuan and Liu, Jian and Zhang, Chi and Zhao, Zibo and He, Chu and Yu, Lei",
        "publisher": "arXiv",
        "urldate": "2024-12-08",
        "language": "en",
        "doi": "10.48550/arXiv.2404.13972",
        "url": "http://arxiv.org/abs/2404.13972",
        "title": "Non-{Uniform} {Exposure} {Imaging} via {Neuromorphic} {Shutter} {Control}",
        "type": "misc",
        "key": "lin_non-uniform_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2018.00663",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00460",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3116135",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00765",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-023-01754-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01186",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10462-022-10305-2",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01219-9_4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCP54855.2022.9887786",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01176",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2021.3058586",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMECH.2023.3234316",
            "source": "crossref"
        },
        {
            "doi": "10.1364/PRJ.489989",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00211",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2008.4712138",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00216",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01458",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr52729.2023.00561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00223",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01454",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01720",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00956",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00985",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.2174/97816080517001100101",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.276126",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0004-3702(81)90024-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2021.3136358",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3230727",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00953",
            "source": "crossref"
        },
        {
            "doi": "10.1023/b:visi.0000029664.99615.94",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10514-022-10036-x",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1401132.1401174",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-01144-2",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19781-9_36",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_34",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00493",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2003.819861",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00207",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9812003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.02423",
            "source": "crossref"
        },
        {
            "title": "LSD \u2013joint denoising and deblurring of short and long exposure images with CNNs",
            "source": "crossref"
        },
        {
            "title": "Noise2Noise: Learning image restoration without clean data",
            "source": "crossref"
        },
        {
            "title": "High-quality self-supervised deep image denoising",
            "source": "crossref"
        },
        {
            "title": "An iterative image registration technique with an application to stereo vision",
            "source": "crossref"
        },
        {
            "title": "Detection and tracking of point",
            "source": "crossref"
        },
        {
            "title": "Understanding the performance of neuromorphic event-based vision sensors",
            "source": "crossref"
        },
        {
            "title": "DV-processing documentation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The NED dataset includes 51 sequences in three types of combination of object and camera motion, i.e., static scene (with static camera and object), dynamic object (with static camera),
and dynamic camera (with static or dynamic objects).
