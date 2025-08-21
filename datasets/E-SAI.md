---
{
    "name": "E-SAI",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Synthetic Aperture Imaging"
    ],
    "description": "Synthetic Aperture Imaging",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/19SnoRfVgvKlUspAyzbBhtXszXkh5NsbS/view",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 14.12,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Learning to See Through With Events",
        "doi": "10.1109/TPAMI.2022.3227448",
        "authors": [
            "Lei Yu",
            "Xiang Zhang",
            "Wei Liao",
            "Wen Yang",
            "Gui-Song Xia"
        ],
        "abstract": "Although synthetic aperture imaging (SAI) can achieve the seeing-through effect by blurring out off-focus foreground occlusions while recovering in-focus occluded scenes from multi-view images, its performance is often deteriorated by dense occlusions and extreme lighting conditions. To address the problem, this paper presents an Event-based SAI (E-SAI) method by relying on the asynchronous events with extremely low latency and high dynamic range acquired by an event camera. Specifically, the collected events are first refocused by a Refocus-Net module to align in-focus events while scattering out off-focus ones. Following that, a hybrid network composed of spiking neural networks (SNNs) and convolutional neural networks (CNNs) is proposed to encode the spatio-temporal information from the refocused events and reconstruct a visual image of the occluded targets. Extensive experiments demonstrate that our proposed E-SAI method can achieve remarkable performance in dealing with very dense occlusions and extreme lighting conditions and produce high-quality images from pure events. Codes and datasets are available at https://dvs-whu.cn/projects/esai/.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 12,
            "updated": "2025-07-03T08:31:50.670380"
        },
        {
            "source": "scholar",
            "count": 17,
            "updated": "2025-07-03T08:31:50.235105"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2212.02219"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/9973388"
        },
        {
            "type": "project_page",
            "url": "https://dvs-whu.cn/projects/esai/."
        },
        {
            "type": "github_page",
            "url": "https://github.com/dvs-whu/E-SAI"
        }
    ],
    "full_name": "Event-based Synthetic Aperture Imaging (E-SAI)",
    "additional_metadata": {
        "num_recordings": "588",
        "stereo": false
    },
    "bibtex": {
        "doi": "10.1109/TPAMI.2022.3227448",
        "keywords": "Cameras;Image reconstruction;Lighting;Imaging;Brightness;Visualization;Task analysis;Synthetic aperture imaging;event camera;spiking neural network",
        "pages": "8660-8678",
        "number": "7",
        "volume": "45",
        "year": 2023,
        "title": "Learning to See Through With Events",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "author": "Yu, Lei and Zhang, Xiang and Liao, Wei and Yang, Wen and Xia, Gui-Song",
        "type": "article",
        "key": "9973388"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2004.1315006",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2006.244",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2012.06.014",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSTSP.2017.2715012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093448",
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
            "doi": "10.7551/mitpress/5704.001.0001",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0893-6080(97)00011-7",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58526-6_22",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00653",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01401",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-020-01410-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00206",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2007.4409032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2011.5995417",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2016.2615328",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2016.07.019",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s19030607",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1186822.1073259",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2011.10.003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSTSP.2017.2747126",
            "source": "crossref"
        },
        {
            "doi": "10.1017/cbo9780511811685",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01258",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58558-7_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCI.2020.2964255",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.242",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v33i01.33011311",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00331",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.244",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.1603.08155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7299155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACSSC.2003.1292216",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.123",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0816-y",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01721",
            "source": "crossref"
        },
        {
            "title": "Active sensing and its application to neuromorphic space imaging [talk]",
            "source": "crossref"
        },
        {
            "title": "Self-supervised learning of event-based optical flow with spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Spatial transformer networks",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "SGDR: Stochastic gradient descent with warm restarts",
            "source": "crossref"
        },
        {
            "title": "Very deep convolutional networks for large-scale image recognition",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 588 recordings
