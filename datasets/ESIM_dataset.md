---
{
    "name": "ESIM_dataset",
    "aliases": [
        "ESIM-SR1",
        "ESIM-SR2"
    ],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "De-noising",
        "Frame Reconstruction",
        "Super-resolution"
    ],
    "task": "Image Reconstruction from events",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [
            "Unknown"
        ],
        "availability_comment": "Dataset link no longer works",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/14IEOUrMRtX5G79Z3NdkZLg",
                "format": "Unknown",
                "available": false
            }
        ]
    },
    "paper": {
        "title": "EventSR: From Asynchronous Events to Image Reconstruction, Restoration, and Super-Resolution via End-to-End Adversarial Learning",
        "doi": "10.1109/CVPR42600.2020.00834",
        "authors": [
            "Lin Wang",
            "Tae-Kyun Kim",
            "Kuk-Jin Yoon"
        ],
        "abstract": "Event cameras sense intensity changes and have many advantages over conventional cameras. To take advantage of event cameras, some methods have been proposed to reconstruct intensity images from event streams. However, the outputs are still in low resolution (LR), noisy, and unrealistic. The low-quality outputs stem broader applications of event cameras, where high spatial resolution (HR) is needed as well as high temporal resolution, dynamic range, and no motion blur. We consider the problem of reconstructing and super-resolving intensity images from LR events, when no ground truth (GT) HR images and downsampling kernels are available. To tackle the challenges, we propose a novel end-to-end pipeline that reconstructs LR images from event streams, enhances the image qualities, and upsamples the enhanced images, called EventSR. For the absence of real GT images, our method is primarily unsupervised, deploying adversarial learning. To train EventSR, we create an open dataset including both real-world and simulated scenes. The use of both datasets boosts up the network performance, and the network architectures and various loss functions in each phase help improve the image qualities. The whole pipeline is trained in three phases. While each phase is mainly for one of the three tasks, the networks in earlier phases are \ufb01netuned by respective loss functions in an end-to-end manner. Experimental results show that EventSR reconstructs high-quality SR images from events for both simulated and real-world data. A video of the experiments is available at https://youtu.be/OShS\\_MwHecs.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 86,
            "updated": "2025-07-14T07:39:20.763496"
        },
        {
            "source": "scholar",
            "count": 126,
            "updated": "2025-07-14T07:39:20.437889"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2003.07640"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9157562"
        },
        {
            "type": "github_page",
            "url": "https://github.com/wl082013/ESIM_dataset"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "8312--8322",
        "year": 2020,
        "month": "jun",
        "author": "Wang, Lin and Kim, Tae-Kyun and Yoon, Kuk-Jin",
        "publisher": "IEEE",
        "booktitle": "2020 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPR42600.2020.00834",
        "url": "https://ieeexplore.ieee.org/document/9157562/",
        "shorttitle": "{EventSR}",
        "isbn": "978-1-72817-168-5",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "{EventSR}: {From} {Asynchronous} {Events} to {Image} {Reconstruction}, {Restoration}, and {Super}-{Resolution} via {End}-to-{End} {Adversarial} {Learning}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "wang_eventsr_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2019.01258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.207",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.91",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.481",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2017.7951488",
            "source": "crossref"
        },
        {
            "doi": "10.1016/B978-0-12-396501-1.00006-6",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00205",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.182",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00854",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.19",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2018/117",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2017.151",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00262",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.244",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00853",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00209",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2010.5540171",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-27413-8_47",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00113",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00161",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00130",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.2967289",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "A deep journey into super-resolution: A survey",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "The unreasonable effectiveness of deep features as a perceptual metric",
            "source": "crossref"
        },
        {
            "title": "Unsupervised degradation learning for single image super-resolution",
            "source": "crossref"
        },
        {
            "title": "Accelerating the super-resolution convolutional neural network",
            "source": "crossref"
        },
        {
            "title": "End-to-end learning of representations for asynchronous event-based data",
            "source": "crossref"
        },
        {
            "title": "Asynchronous, photometric feature tracking using events and frames",
            "source": "crossref"
        },
        {
            "title": "Generative adversarial nets",
            "source": "crossref"
        },
        {
            "title": "Perceptual losses for real-time style transfer and super-resolution",
            "source": "crossref"
        },
        {
            "title": "The relativistic discriminator: a key element missing from standard gan",
            "source": "crossref"
        },
        {
            "title": "Real-time 3d reconstruction and 6-dof tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Simultaneous optical flow and intensity estimation from an event camera",
            "source": "crossref"
        },
        {
            "title": "Image denoising: Can plain neural networks compete with bm3d?",
            "source": "crossref"
        },
        {
            "title": "Learning a deep convolutional network for image super-resolution",
            "source": "crossref"
        },
        {
            "title": "Esrgan: Enhanced super-resolution generative adversarial networks",
            "source": "crossref"
        },
        {
            "title": "Event-based high dynamic range image and very high frame rate video generation using conditional generative adversarial networks",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
