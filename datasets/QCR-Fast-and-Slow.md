---
{
    "name": "QCR-Fast-and-Slow",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Visual Place Recognition",
        "Visual Odometry",
        "SLAM"
    ],
    "description": "Visual Place Recognition",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "HuggingFace"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "HuggingFace",
                "url": "https://huggingface.co/datasets/gokulbnr/QCR-Fast-Slow-Event-Dataset",
                "format": "aedat",
                "available": false
            }
        ],
        "size_gb": 333.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Enhancing Visual Place Recognition via Fast and Slow Adaptive Biasing in Event Cameras",
        "doi": "10.1109/IROS58592.2024.10802384",
        "authors": [
            "Gokul B. Nair",
            "Michael Milford",
            "Tobias Fischer"
        ],
        "abstract": "Event cameras are increasingly popular in robotics due to beneficial features such as low latency, energy efficiency, and high dynamic range. Nevertheless, their downstream task performance is greatly influenced by the optimization of bias parameters. These parameters, for instance, regulate the necessary change in light intensity to trigger an event, which in turn depends on factors such as the environment lighting and camera motion. This paper introduces feedback control algorithms that automatically tune the bias parameters through two interacting methods: 1) An immediate, on-the-fly \\textit{fast} adaptation of the refractory period, which sets the minimum interval between consecutive events, and 2) if the event rate exceeds the specified bounds even after changing the refractory period repeatedly, the controller adapts the pixel bandwidth and event thresholds, which stabilizes after a short period of noise events across all pixels (\\textit{slow} adaptation). Our evaluation focuses on the visual place recognition task, where incoming query images are compared to a given reference database. We conducted comprehensive evaluations of our algorithms' adaptive feedback control in real-time. To do so, we collected the QCR-Fast-and-Slow dataset that contains DAVIS346 event camera streams from 366 repeated traversals of a Scout Mini robot navigating through a 100 meter long indoor lab setting (totaling over 35km distance traveled) in varying brightness conditions with ground truth location information. Our proposed feedback controllers result in superior performance when compared to the standard bias settings and prior feedback control methods. Our findings also detail the impact of bias adjustments on task performance and feature ablation studies on the fast and slow adaptation mechanisms.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 1,
            "updated": "2025-01-06 19:23:30.182686"
        },
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-07-12T09:06:41.855343"
        },
        {
            "source": "crossref",
            "count": 2,
            "updated": "2025-07-12T09:06:42.164110"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2403.16425"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10802384"
        },
        {
            "type": "github_page",
            "url": "https://github.com/gokulbnr/fast-slow-biased-event-vpr"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "366",
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Robotics",
        "note": "arXiv:2403.16425 [cs]",
        "year": 2024,
        "month": "aug",
        "author": "Nair, Gokul B. and Milford, Michael and Fischer, Tobias",
        "publisher": "arXiv",
        "urldate": "2024-12-07",
        "language": "en",
        "doi": "10.48550/arXiv.2403.16425",
        "url": "http://arxiv.org/abs/2403.16425",
        "title": "Enhancing {Visual} {Place} {Recognition} via {Fast} and {Slow} {Adaptive} {Biasing} in {Event} {Cameras}",
        "type": "misc",
        "key": "nair_enhancing_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2021/603",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MRA.2023.3310859",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3216226",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2022.3168892",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3025505",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS51168.2021.9635907",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2023.3298828",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.abm6996",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.adg3679",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2023.3268850",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00146",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC19947.2020.9063149",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10514-022-10051-y",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2018.8460541",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2012.6271979",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.2679755",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.OE.61.7.074103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBOT.1992.220057",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC45102.2020.9294515",
            "source": "crossref"
        },
        {
            "doi": "10.1002/9781118927601",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TED.2017.2717848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3152999",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10470-005-1606-1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2010.5537475",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00423",
            "source": "crossref"
        },
        {
            "doi": "10.1017/CBO9781107447615",
            "source": "crossref"
        },
        {
            "doi": "10.21105/joss.02783",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2012.6224623",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10160749",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA57147.2024.10610918",
            "source": "crossref"
        },
        {
            "title": "Adaptive time-slice block-matching optical flow algorithm for dynamic vision sensors",
            "source": "crossref"
        },
        {
            "title": "Data rate control for event-based vision sensor",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Unraveling the paradox of intensity-dependent DVS pixel noise",
            "source": "crossref"
        },
        {
            "title": "Optimal biasing and physical limits of DVS event noise",
            "source": "crossref"
        },
        {
            "title": "Exploiting alternating DVS shot noise event pair statistics to reduce background activity",
            "source": "crossref"
        },
        {
            "title": "A 240\u00d7 180 10mw 12us latency sparse-output vision sensor for mobile applications",
            "source": "crossref"
        },
        {
            "title": "Towards Visual SLAM with Event-based Cameras",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 366 traverses of the 100m lab environment
