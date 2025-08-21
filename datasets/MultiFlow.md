---
{
    "name": "MultiFlow",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Optical Flow"
    ],
    "description": "Optical Flow",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "Dataset files are compressed using the tar format.",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://github.com/uzh-rpg/bflow?tab=readme-ov-file#data",
                "format": "Unknown",
                "available": false
            }
        ],
        "size_gb": 1803.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Dense Continuous-Time Optical Flow from Event Cameras",
        "doi": "10.1109/TPAMI.2024.3361671",
        "authors": [
            "Mathias Gehrig",
            "Manasi Muglikar",
            "Davide Scaramuzza"
        ],
        "abstract": "We present a method for estimating dense continuous-time optical flow from event data. Traditional dense optical flow methods compute the pixel displacement between two images. Due to missing information, these approaches cannot recover the pixel trajectories in the blind time between two images. In this work, we show that it is possible to compute per-pixel, continuous-time optical flow using events from an event camera. Events provide temporally fine-grained information about movement in pixel space due to their asynchronous nature and microsecond response time. We leverage these benefits to predict pixel trajectories densely in continuous time via parameterized Be\u00b4 zier curves. To achieve this, we build a neural network with strong inductive biases for this task: First, we build multiple sequential correlation volumes in time using event data. Second, we use Be\u00b4 zier curves to index these correlation volumes at multiple timestamps along the trajectory. Third, we use the retrieved correlation to update the Be\u00b4 zier curve representations iteratively. Our method can optionally include image pairs to boost performance further. To the best of our knowledge, our model is the first method that can regress dense pixel trajectories from event data. To train and evaluate our model, we introduce a synthetic dataset (MultiFlow) that features moving objects and ground truth trajectories for every pixel. Our quantitative experiments not only suggest that our method successfully predicts pixel trajectories in continuous time but also that it is competitive in the traditional two-view pixel displacement metric on MultiFlow and DSEC-Flow. Open source code and datasets are released to the public.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 11,
            "updated": "2025-06-09T08:53:06.917830"
        },
        {
            "source": "scholar",
            "count": 11,
            "updated": "2025-06-09T08:53:06.037607"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2203.13674"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10419040"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/bflow"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "1--12",
        "year": 2024,
        "author": "Gehrig, Mathias and Muglikar, Manasi and Scaramuzza, Davide",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/TPAMI.2024.3361671",
        "url": "https://ieeexplore.ieee.org/document/10419040/",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
        "title": "Dense {Continuous}-{Time} {Optical} {Flow} from {Event} {Cameras}",
        "type": "article",
        "key": "Gehrig2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1007/978-3-030-11024-6_56",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00963",
            "source": "crossref"
        },
        {
            "doi": "10.15607/rss.2018.xiv.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.316",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58536-5_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01033",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.179",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58536-5_33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298607",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.459",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.290",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01063",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00631",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00678",
            "source": "crossref"
        },
        {
            "doi": "10.1109/iccv.2015.316",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR48806.2021.9412269",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01270-0_42",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.154",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6247877",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-012-0607-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2019.00225",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20047-2_4",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2011.11.001",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-33783-3_44",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2015.7139876",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58526-6_22",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341224",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.261",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2858287",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093607",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2017.7989517",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.438",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00996",
            "source": "crossref"
        },
        {
            "doi": "10.1162/tacl_a_00166",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-010-0390-2",
            "source": "crossref"
        },
        {
            "title": "Perceiver IO: A general architecture for structured inputs and outputs",
            "source": "crossref"
        },
        {
            "title": "ProFlow: Learning to predict optical flow",
            "source": "crossref"
        },
        {
            "title": "An iterative image registration technique with an application to stereo vision",
            "source": "crossref"
        },
        {
            "title": "HASTE: Multi-hypothesis asynchronous speeded-up tracking of events",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Decoupled weight decay regularization",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The dataset links are split between training and validation:

MultiFlow

- Training: https://download.ifi.uzh.ch/rpg/bflow/multiflow/train.tar (1500 Gb)
- Validation https://download.ifi.uzh.ch/rpg/bflow/multiflow/val.tar (303 Gb)
