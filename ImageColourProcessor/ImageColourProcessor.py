
if __name__ == '__main__':
    # %%
    from PIL import Image
    import glob, os
    import matplotlib.pyplot as plt
    import numpy as np

    #codes are based on html colour list
    colour_dict = {(255, 255, 0): 'Yellow', (0, 0, 255):"Blue" ,(255, 0, 0):"Red",(0, 128, 0):"Green",(255,255,255):"White",(0,0,0):"Black",(255, 165, 0):"Orange",(135, 206, 235):"Sky Blue",(0, 0, 128):"Navy", (128, 0, 0):"Maroon", (255,215,0):"Gold",(220, 20, 60):"Crimson", (178, 34, 34):"FireBrick", (218, 165, 32):"Goldenrod"}
    colour_keys_list = list(colour_dict.keys())
    country_dict = {}

    #open all
    flag_info = {}
    flag_colour_info = {}
    fig, axs  = plt.subplots(nrows=142, ncols=1, figsize=(300, 500))
    axs = axs.flatten()
    count = 0
    for infile in glob.glob("*.png"):
        file, ext = os.path.splitext(infile)
        with Image.open(infile) as im:
            imrgb = im.convert('RGB')
            imageplt = np.asarray(imrgb)
            colour_list = imrgb.getcolors()
            colour_list.sort(reverse=True)
            num_pixels = imrgb.size[0] * imrgb.size[1]
            final_list = []
            name_list = []
            print(file)
            print(num_pixels, "  1% = ",(num_pixels)/100 )
            print(colour_list)
            flag_colour_dict = {}
            #loop to put very similar coloured pixels under same colour name
            for i in range(len(colour_list)):
                #threshold for colour inclusion needs adjusting
                #if colour_list[i][0] > (num_pixels/100):
                final_list.append(colour_list[i])


                closest_colour = min(colour_keys_list, key=lambda c: (c[0]-colour_list[i][1][0])**2 + (c[1]-colour_list[i][1][1])**2 + (c[2]-colour_list[i][1][2])**2)
                num_colour_pixels = colour_list[i][0]
                if closest_colour in flag_colour_dict:
                    flag_colour_dict[closest_colour] += num_colour_pixels
                else:
                    flag_colour_dict[closest_colour] = num_colour_pixels
            for key in flag_colour_dict:
                if flag_colour_dict[key] > num_pixels/100:
                    name_list.append(colour_dict[flag_colour_dict[key]])
            empty_string =', '
            axs[count].imshow(imageplt)
            axs[count].set(title=(file+": "+empty_string.join(name_list)))
            count += 1
            flag_info[file] = final_list
            country_dict[file] = name_list
            print(file, name_list)
            print()
    print(country_dict)


    
    

# %%
