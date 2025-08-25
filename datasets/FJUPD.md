---
{
    "name": "FJUPD",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Pedestrian Detection"
    ],
    "description": "Pedestrian detection, action recognition, fall detection",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "IEEE Dataport",
            "Direct Download"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "IEEE Dataport",
                "url": "https://ieee-dataport.org/documents/spike-event-object-detection-neuromorphic-vision",
                "format": "aedat",
                "available": true
            },
            {
                "name": "Direct Download",
                "url": "https://ieee-dataport.org/documents/spike-event-object-detection-neuromorphic-vision",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 1.4,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Spike-Event Object Detection for Neuromorphic Vision",
        "doi": "10.1109/ACCESS.2023.3236800",
        "authors": [
            "Yuan-Kai Wang",
            "Shao-En Wang",
            "Ping-Hsien Wu"
        ],
        "abstract": "Neuromorphic vision is one of the novel research fields that study neuromorphic cameras and spiking neural networks (SNNs) for computer vision. Instead of computing on frame-based images, spike events are streamed from neuromorphic cameras, and novel object detection algorithms have to deal with spike events to achieve detection tasks. In this paper, we propose a solution to the novel object detection method with spike events. Spike events are first encoded to event images according to the computational methodology of neuromorphic theory. The event images can be realized as change-detected images of moving objects with a high frame rate. A redesigned deep learning framework is proposed for object detection to process the event images. We propose a deep SNN method that is achieved by the conversion of successful convolution neural networks but trained by event images. The networks with multiscale representation are discussed and designed in our method. We also design a semi-automatic data labeling method to build event-image datasets by object tracking algorithms. The proposed solution, therefore, includes spike event encoding, a redesigned deep SNN, and an event-image data augmentation algorithm. Experiments are conducted not only on the MNIST-DVS dataset, which is a benchmark dataset for the study of neuromorphic vision but also on our event pedestrian detection dataset. The experimental results show that the performance of the deep SNN trained with our augmented data is close to the model trained on manually labeled data. A performance comparison based on the PAFBenchmark dataset shows that our proposed method has higher accuracy than existing SNN methods, and better energy efficiency and lower energy consumption than existing CNN methods. It demonstrates that our deep SNN method is a feasible solution for the study of neuromorphic vision. The intuition that deep SNN trained with more learning data can achieve better accuracy is also confirmed for this brand-new research field.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 7,
            "updated": "2025-06-30T13:00:43.304723"
        },
        {
            "source": "scholar",
            "count": 13,
            "updated": "2025-06-30T13:00:42.910120"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10016699"
        },
        {
            "type": "github_page",
            "url": "https://github.com/fjcu-ee-islab/Spiking_Converted_YOLOv4"
        }
    ],
    "full_name": "FJU Pedestrian Detection (FJUPD)",
    "additional_metadata": {
        "num_classes": "6",
        "num_recordings": "72"
    },
    "bibtex": {
        "pages": "5215--5230",
        "year": 2023,
        "author": "Wang, Yuan-Kai and Wang, Shao-En and Wu, Ping-Hsien",
        "journal": "IEEE Access",
        "urldate": "2024-09-11",
        "language": "en",
        "doi": "10.1109/ACCESS.2023.3236800",
        "url": "https://ieeexplore.ieee.org/document/10016699/",
        "issn": "2169-3536",
        "copyright": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "volume": "11",
        "title": "Spike-{Event} {Object} {Detection} for {Neuromorphic} {Vision}",
        "type": "article",
        "key": "wang_spike-event_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/S0893-6080(97)00011-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2022.3179968",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050527",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2021.3085708",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2017.2686438",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2943160",
            "source": "crossref"
        },
        {
            "doi": "10.1109/isscc.2006.1696265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/isscc.2010.5433973",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00107",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00422-006-0068-6",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01247-4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.81",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.169",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tpami.2016.2577031",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.322",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.91",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.2004.10934",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.1908.08681",
            "source": "crossref"
        },
        {
            "doi": "10.3390/drones6120430",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2021.688344",
            "source": "crossref"
        },
        {
            "doi": "10.1088/1748-3190/ac290c",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58565-5_9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN55064.2022.9892618",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.3023597",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2919301",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i07.6787",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00209",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-21074-8_35",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2021.638474",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11063-021-10562-2",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fncom.2015.00099",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2017.12.005",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2019.06.001",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-92659-5_19",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2018.12.002",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2019.00095",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2020.3043415",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.726791",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0816-y",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10602-1_48",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00774",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00038",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1061-3",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-014-0788-3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2015.7280696",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00682",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2014.2345390",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2010.5539960",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "Training of object detection spiking neural networks for event-based vision",
            "source": "crossref"
        },
        {
            "title": "SLAYER: Spike layer error reassignment in time",
            "source": "crossref"
        },
        {
            "title": "Spike-train level backpropagation for training deep recurrent spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Event-based vision processing in deep neural networks",
            "source": "crossref"
        },
        {
            "title": "Spiking deep residual network",
            "source": "crossref"
        },
        {
            "title": "YOLOv4: Optimal speed and accuracy of object detection",
            "source": "crossref"
        },
        {
            "title": "Empirical evaluation of rectified activations in convolutional network",
            "source": "crossref"
        }
    ]
}
---

### Dataset Description

The FJU pedestrian detection (FJUPD) dataset is the main dataset used in ourpaper "Spike-event Object Detection for Neuromorphic Vision". FJUPD is captured by DAVIS346 and has event images with a size of 346\*260.The FJUPD records pedestrians in three scales and is fabricated to evaluate the effects of semi-automatic labeling and the deep SNN model in the published IEEE Access paper. The event images in the dataset are decoded by the surface
of active events method (SAE), with time steps ranging from 10,000 to 20,000.The FJUPD has two background situations and three object scales.

The dataset download operation will get the compressed ZIP file of the FJUPD dataset. There are 3 folders after decompressing the zip file: raw, labeled, paper. In the "raw" folder, according to the different situations, the FJUPD is split into two folds. Each fold contains SAE decoded images, with time steps ranging from 10,000 to 20,000, and the original event data (.aedat4). In the "labeled" folder, there are semi-automatic labels by discriminative correlation filter with channel and spatial reliability (CSR-DCF) and the corresponding SAE decoded images. In addition to the "raw" and "labeled" folders, there is a folder named "paper" in the FJUPD. It contains training, testing, and validation sets for the published IEEE Access paper.

### Dataset Structure

- Contains 6 different classes, composed of two lighting conditions and three scales each.
- Dataset contains a total of 72 sequences in total
